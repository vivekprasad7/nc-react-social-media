import React from "react";
import "./SearchModal.css";
import { useUserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

export const SearchModal = ({ searchInput, showSearchModal, setShowSearchModal }) => {
    const { userState } = useUserContext();
    const navigate = useNavigate();

    const searchResult =
        searchInput?.trim().length > 0 &&
        userState?.users?.filter(
            (user) =>
                user?.firstName
                    ?.toLowerCase()
                    .includes(searchInput.trim().toLowerCase()) ||
                user?.lastName
                    ?.toLowerCase()
                    .includes(searchInput.trim().toLowerCase()) ||
                user?.username?.toLowerCase().includes(searchInput.trim().toLowerCase())
        );

    return (
        <div className="search-modal" style={{display: showSearchModal ? "block" : "none" }}>
            <div  className="ep-close-icon">
                <i  onClick={() => setShowSearchModal(false)}
                    class="fa-solid fa-close icon-circle"
                ></i>
            </div>

            <div>
        {searchInput?.length > 0 && (
          <div>{searchResult?.length === 0 && <h3>No Users Found</h3>}</div>
        )}
        {searchInput?.length === 0 && <h3>No Users Found</h3>}
      </div>

            <div className="search-results">
                {   searchResult?.length > 0 && (
                    searchResult?.map((user) => {
                        return(
                          <div className="sr-unit">
                          <div className="sr-img"
                            onClick={() => { 
                                navigate(`/profile/${user?.username}`)
                                setShowSearchModal(false);
                            }}
                          
                          >
                            <img  
                            src={user?.profilePic}
                            alt="avatar"
                            />
                          </div>
                          <div className="sr-text">
                            <h3>{user?.firstName} {user?.lastName}</h3>
                            <p>@{user?.username}</p>
                          </div>
                          </div>
                        )
                    }))
                }
            </div>






        </div>
    );
};
