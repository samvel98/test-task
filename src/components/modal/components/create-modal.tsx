import React, { useCallback, useEffect, useState } from "react";
import { employees } from "../../../utils/constants";
import { useStyles } from "../modal.styles";

type CreateUserModalProps = {
  selectedEmployees: IEmployee[]
  onCancel: () => void;
  onSubmit: (employees: IEmployee[]) => void;
}

export function CreateModal({ onCancel, onSubmit, selectedEmployees }: CreateUserModalProps) {
  const styles = useStyles();
  const [allMatches, setAllMatches] = useState(employees);
  const [selectedMatches, setSelectedMatches] = useState(selectedEmployees)
  
  const handleAddMatch = useCallback((match: IEmployee) => {
    if(selectedMatches.length < 5) {
      setSelectedMatches(prev => [...prev, match])
    }
  }, [selectedMatches.length]);

  const handleRemoveFromMatches = useCallback((match: IEmployee) => {
    setSelectedMatches(prev => prev.filter(item => item !== match))
  }, [])

  useEffect(() => {
    setAllMatches(() => employees.filter(item => !selectedMatches.some(match => match === item)));
  }, [selectedMatches]);
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Add Matches</h1>
        <div className={styles.matches}>
          <div className={styles.matchLists}>
            {allMatches.map((employee, index) => 
              <div key={index} className={styles.matchItem} onClick={() => handleAddMatch(employee)}>
                <div className={styles.matchItemName}>
                  {`${employee.first_name} ${employee.last_name}`}
                </div>
                <div className={styles.matchItemJob}>
                  {employee.job_title}
                </div>
              </div>
              )}
          </div>
          <div className={styles.selectedMatches}>
            {selectedMatches.map((selectedMatch, index) => 
              <div key={index} className={styles.matchItem}>
                <div className={styles.matchItemName}>
                  {`${selectedMatch.first_name} ${selectedMatch.last_name}`}
                </div>
                <div className={styles.matchItemJob}>
                  {selectedMatch.job_title}
                </div>
                <span className={styles.removeFromMatchList} onClick={() => handleRemoveFromMatches(selectedMatch)}>X</span>
              </div>
              )}
          </div>
        </div>
        <button className={styles.submitBtn} type="submit" onClick={() => onSubmit(selectedMatches)} > Save </button>
        <button className={styles.cancelBtn} type="button" value="cancel" onClick={onCancel} > Cancel </button>
      </div>
    </div>
  )
}