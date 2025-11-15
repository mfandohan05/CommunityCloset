import './UploadPicturesComponent.css';

function UploadPicturesComponent() {
    return (
        <div>
            <fieldset className='upload-pictures-fieldset'>
                <legend className='mb-3'>Upload Pictures</legend>
                <div class="mb-3">
                    <label for="formFileMultiple" class="form-label">Add photos of the item you're donating. You can upload up to 5 pictures.</label>
                    <label class="form-label">Accepted formats: JPG, PNG. Max size per image: 5MB.</label>
                    <input class="form-control" type="file" id="formFileMultiple" multiple />
                </div>
            </fieldset>
        </div>
    );
};

export default UploadPicturesComponent;