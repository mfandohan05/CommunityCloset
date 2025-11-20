import DonorDetailsComponent from './DonorDetailsComponent';
import ItemDetailsComponent from './ItemDetailsComponent';
import UploadPicturesComponent from './UploadPicturesComponent';
import './MainDonationComponent.css';
import supabase from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function MainDonationComponent() {
    const navigate = useNavigate();
    const [processing, setProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const itemName = e.target.itemName.value;
        const itemCondition = e.target.itemCondition.value;
        const itemQuantity = e.target.itemQuantity.value;
        const itemSize = e.target.itemSize.value;
        const itemColor = e.target.itemColor.value;
        const itemBrand = e.target.itemBrand.value;
        const itemDescription = e.target.itemDescription.value;

        const donorName = e.target.donorName.value;
        const donorEmail = e.target.donorEmail.value;

        const files = e.target.formFileMultiple.files;

        const bucketName = 'Images for CommunityCloset';
        let imageUrls = [null, null, null, null, null];

        for (let i = 0; i < Math.min(files.length, 5); i++) {
            const file = files[i];
            const ext = file.name.split('.').pop() || 'png';
            const safeName = `${Date.now()}-${i}`;
            const filePath = `items/${safeName}.${ext}`;

            const { error: uploadError } = await supabase.storage
                .from(bucketName)
                .upload(filePath, file);

            if (uploadError) continue;

            const { data: publicUrlData } = supabase.storage
                .from(bucketName)
                .getPublicUrl(filePath);

            imageUrls[i] = publicUrlData.publicUrl;
        }

        const { data, error } = await supabase
            .from('items')
            .insert([
                {
                    item_name: itemName,
                    item_condition: itemCondition,
                    item_description: itemDescription,
                    item_quantity: itemQuantity,
                    item_size: itemSize,
                    item_color: itemColor,
                    item_brand: itemBrand,
                    donor_name: donorName,
                    donor_email: donorEmail,
                    image_url_1: imageUrls[0],
                    image_url_2: imageUrls[1],
                    image_url_3: imageUrls[2],
                    image_url_4: imageUrls[3],
                    image_url_5: imageUrls[4],
                    created_at: new Date()
                }
            ])
            .select()
            .single();

        if (error) {
            setProcessing(false);
            alert('There was an error submitting your donation.');
            return;
        }

        navigate('/donation-success', {
            state: {
                donationId: data.item_id,
                itemName: data.item_name,
                previewImage: data.image_url_1
            }
        });
    };

    return (
        <div className='main-donation-component'>
            <div>
                <h1 className='text-center m-3'>Donate an Item!</h1>
                <p className='text-center'>
                    Your generosity keeps our community moving! Fill out the form below to donate an item.
                </p>
            </div>

            <form onSubmit={handleSubmit} className='main-donation-form'>
                <ItemDetailsComponent />
                <UploadPicturesComponent />
                <DonorDetailsComponent />

                <div className='text-center mt-4 mb-4 button-container'>
                    <button
                        type='submit'
                        className='btn btn-primary submit-donation-button w-100'
                        disabled={processing}
                    >
                        Submit Donation
                    </button>

                    {processing && (
                        <div className='alert alert-info mt-3'>
                            Processing…
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default MainDonationComponent;