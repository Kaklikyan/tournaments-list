import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SearchInput from "../../common/components/SearchInput";
import TournamentCard from "../../common/components/TournamentCard";
import useDebounce from "../../hooks/useDebounce";
import "./TournamentsList.css";

function TournamentsList({
  fetchTournaments,
  resetTournamentsInfo,
  handleAddUserTournament,
  handleHideTournamentsList,
  handleShowTournamentsList,
  handleTournamentsListUpdate,
  tournaments
}) {
  const {
    pending,
    tournamentsListUpdatable,
    errorMsg,
    isListVisible
  } = tournaments;
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const handleTournamentClick = tournament => e => {
    handleAddUserTournament(tournament);
    handleHideTournamentsList();
    handleTournamentsListUpdate();
  }
  const handleSetSearchTerm = () => e => {
    const val = e.target.value.trim();
    setSearchTerm(!!val ? val : "");
  } 

  useEffect(
    () => {
      if(debouncedSearchTerm) {
        fetchTournaments(debouncedSearchTerm);
      } else {
        resetTournamentsInfo();
      }
    },
    [fetchTournaments, resetTournamentsInfo, debouncedSearchTerm]
  );

  return (
    <div className="tournaments-list__wrapper">
      <SearchInput
        handleOnChange={handleSetSearchTerm()}
        error={!pending && errorMsg}
        handleOnFocus={() => handleShowTournamentsList()}
      />
      <div className="tournaments-list__results">
        {tournamentsListUpdatable.length > 0 && isListVisible
          ? tournamentsListUpdatable.map(tournament => (
              <TournamentCard 
                key={tournament.id}
                title={tournament.title}
                description={tournament.description}
                imagePath={tournament.imagePath}
                onClick={handleTournamentClick(tournament)}
              />
            ))
          : (pending && "Searching...")
        }
      </div>
    </div>
  );
}

TournamentsList.propTypes = {
  fetchTournaments: PropTypes.func.isRequired,
  resetTournamentsInfo: PropTypes.func.isRequired,
  handleAddUserTournament: PropTypes.func.isRequired,
  handleHideTournamentsList: PropTypes.func.isRequired,
  handleShowTournamentsList: PropTypes.func.isRequired,
  handleTournamentsListUpdate: PropTypes.func.isRequired,
  tournaments: PropTypes.object
}

export default TournamentsList;
