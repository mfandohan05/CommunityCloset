import './UploadPicturesComponent.css';

function UploadPicturesComponent() {
    return (
        <fieldset className="upload-pictures-fieldset">
            <legend className="mb-3">Upload Pictures</legend>

            <label className="form-label">
                Add photos of the item you're donating. You can upload up to 5 pictures.
            </label>
            <label className="form-label">
                Accepted formats: JPG, PNG. Max size: 5MB per image.
            </label>

            <input
                name="formFileMultiple"
                className="form-control"
                type="file"
                multiple
                required
            />
        </fieldset>
    );
}

export default UploadPicturesComponent;