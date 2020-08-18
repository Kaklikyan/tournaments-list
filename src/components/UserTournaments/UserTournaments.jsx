import React from "react";
import PropTypes from "prop-types";
import TournamentCard from "../../common/components/TournamentCard";
import "./UserTournaments.css";

function UserTournaments({ handleDeleteUserTournament, handleTournamentsListUpdate, userTournaments }) {
  const {
    userTournamentsList
  } = userTournaments;

  const handleDeleteTournament = tournamentId => () => {
    handleDeleteUserTournament(tournamentId);
    handleTournamentsListUpdate();
  }

  return (
    <div className="user-tournaments__wrapper">
      <h3 className="user-tournaments__header">
        Tournaments!
      </h3>
      <div className="user-tournaments__block">
        {userTournamentsList.length > 0
          ? userTournamentsList.map(({ id, title, description, imagePath }) => (
              <TournamentCard
                key={id}
                title={title}
                description={description}
                imagePath={imagePath}
                isDeletable
                onClick={handleDeleteTournament(id)}
              />
            ))
          : 'There is no selected tournament.'
        }
      </div>
    </div>
  )
}

UserTournaments.propTypes = {
  handleDeleteUserTournament: PropTypes.func.isRequired,
  handleTournamentsListUpdate: PropTypes.func.isRequired,
  userTournaments: PropTypes.object
}

export default UserTournaments;
