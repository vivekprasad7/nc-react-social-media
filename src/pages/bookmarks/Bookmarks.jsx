import React from "react";
import "./Bookmarks.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Widgets } from "../../components/widgets/Widgets";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";
import { Loading } from "../../components/loader/loading";
import { PostCard } from "../../components/post-card/PostCard";
import { usePostContext } from "../../contexts/postContext";

export const Bookmarks = () => {
  const { userState, isLoading } = useUserContext();
  const { postState } = usePostContext();
  const navigate = useNavigate();
  return (
    <div className="bookmarks-page">
      <Sidebar />
      <div className="bookmarks-section">
        <div className="feed-top">
          <div className="feet-title">
            <h3>Bookmarks</h3>
          </div>

          {
            <div className="nav-icon">
              <i
                onClick={() => navigate("/")}
                class="fa-solid fa-arrow-left icon-circle"
              ></i>
            </div>
          }
        </div>
        <div>
          {userState?.bookmarks?.length > 0 ? (
            isLoading ? (
              <>
                <Loading />
              </>
            ) : (
              <div>
                {userState?.bookmarks.map((postID) => {
                  return (
                    <>
                      <PostCard
                        postItem={postState?.posts?.find(
                          (post) => post._id === postID
                        )}
                      />
                    </>
                  );
                })}
              </div>
            )
          ) : (
            <div className="no-bookmarks">
              <p>No Bookmarks to Show</p>
            </div>
          )}
        </div>
      </div>
      <Widgets />
    </div>
  );
};
