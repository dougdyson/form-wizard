import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import ComplianceCard from '../ComplianceCard/ComplianceCard';
import ComplianceForm from '../ComplianceForm/ComplianceForm';
import { getComplianceByEntityID } from '../../data/data';

import { Grid, Typography, IconButton, AddCircleIcon } from "@mui/material";


export default function ComplianceList(props) {

  const { id } = useParams();
  
  const [complianceForm, setComplianceForm] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [rules, setRules] = useState([]);

  const getRules = () => {
    const complianceRules = getComplianceByEntityID(id)
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

  const cardStyle = {
    ml: 3,
    mt: 2,
    mb: 2,
    color: "darkgrey",
  }

  return (
    <Grid>
      <Grid>
        {complianceForm && <ComplianceForm showModal={complianceForm} toggleModal={toggleRuleForm} />}
        <Typography sx={cardStyle}>Compliance Checklist</Typography>
        {rules.map(rule => <ComplianceCard toggleRuleForm={toggleRuleForm} key={rule.id} id={rule.id} setActiveItem={handleSetActiveItem} />)}
      </Grid>
    </Grid>
  )

}