import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ImageUploader from "react-images-upload";
import { addNewPost } from "../../redux/actions/post";

const AddNewPost = ({ user: { _id }, addNewPost, history }) => {
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    caption: ""
  });
  const { title, caption } = formData;
  const onDrop = e => {
    setPhoto(e[0]);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const id = _id;
    await addNewPost({ id, title, photo, caption, history });
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form className="form" onSubmit={e => onSubmit(e)}>
      <input
        placeholder="عنوان"
        type="text"
        name="title"
        onChange={e => onChange(e)}
        required
      />
      <input
        placeholder="توضیحات"
        type="text"
        name="caption"
        onChange={e => onChange(e)}
      />
      <ImageUploader
        withIcon={true}
        onChange={onDrop}
        withPreview={true}
        singleImage={true}
        maxFileSize={5242880}
        buttonText="عکس مورد نظر خود را انتخاب کنید"
        imgExtension={[".jpg", ".gif", ".png", ".gif", ".tif", "jpeg", "jpg"]}
      />
      <input type="submit" className="btn btn-primary" value="ارسال" />
    </form>
  );
};

addNewPost.prototype = {
  user: PropTypes.object.isRequired,
  addNewPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, { addNewPost })(withRouter(AddNewPost));
