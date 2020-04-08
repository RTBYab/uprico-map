import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import Const from "../../utils/constants";
import { withRouter } from "react-router-dom";
import React, { useEffect, Fragment, useState } from "react";
import { getPost, updatePost, deletePost } from "../../redux/actions/post";

const Details = ({
  getPost,
  match,
  post: { post, loading },
  auth,
  updatePost,
  deletePost,
  history,
}) => {
  const { data } = match.params;
  const id = auth.user._id;

  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const { title, body } = formData;

  useEffect(() => {
    getPost(data, id);
  }, [getPost, data, id, title, body]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onDelete = (id, history) => {
    deletePost(id, auth.token, history);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updatePost(post._id, auth.token, title, body, history);
  };

  return post === null || loading ? (
    <Spinner />
  ) : (
    <Fragment>
      {post.postedBy._id === id ? (
        <div>
          <form className="form" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                name="title"
                value={title || post.title}
                onChange={(e) => onChange(e)}
              />
            </div>
            <img
              src={Const.URL.Posts + `${id}/${post.photo}`}
              alt={post.title}
            />
            <div className="form-group">
              <input
                name="body"
                value={body || post.body}
                onChange={(e) => onChange(e)}
              />
            </div>
            <input type="submit" className="btn btn-primary" value="اصلاحات" />
            <button onClick={() => onDelete(post._id)}>حذف پست</button>
          </form>
        </div>
      ) : (
        <div>
          <img src={Const.URL.Posts + `${id}/${post.photo}`} alt={post.title} />
          <h1>{post.title}</h1>
          <h1>{post.body}</h1>
        </div>
      )}
    </Fragment>
  );
};
Details.prototype = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPost, updatePost, deletePost })(
  withRouter(Details)
);
