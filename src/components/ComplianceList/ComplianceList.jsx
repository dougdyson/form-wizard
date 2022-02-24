import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import ComplianceCard from '../ComplianceCard/ComplianceCard';
import ComplianceForm from '../ComplianceForm/ComplianceForm';
import { getComplianceByEntityID } from '../../data/data';

import { Grid, IconButton, AddCircleIcon } from "@mui/material";


export default function ComplianceList(props) {

  const { id } = useParams();
  
  const [complianceForm, setComplianceForm] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [rules, setRules] = useState([]);

  const getRules = () => {
    const complianceRules = getComplianceByEntityID(id)
    console.log('complianceRules', complianceRules, 'id==>>', id);
    setRules(complianceRules);
  }

  useEffect(() => {
    getRules();
  }, []);

  const toggleRuleForm = () => setComplianceForm(prevState => !prevState);

  const handleSetActiveItem = (item) => {
    setActiveItem(item);
    toggleRuleForm();
  }

  return (
    <Grid>
      <Grid>
        {complianceForm && <ComplianceForm showModal={complianceForm} toggleModal={toggleRuleForm} />}
        Compliance List!
        {rules.map(rule => <ComplianceCard toggleRuleForm={toggleRuleForm} key={rule.id} id={rule.id} setActiveItem={handleSetActiveItem} />)}
      </Grid>
    </Grid>
  )

}