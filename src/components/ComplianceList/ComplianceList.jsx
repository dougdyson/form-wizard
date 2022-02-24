import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import ComplianceCard from '../ComplianceCard/ComplianceCard';
import { getComplianceByEntityID } from '../../data/data';

import { Grid, IconButton, AddCircleIcon } from "@mui/material";


export default function ComplianceList(props) {

  const { id } = useParams();
  const complianceID = +id;
  
  const [complianceForm, setComplianceForm] = useState(false);
  const [rules, setRules] = useState([]);

  const getRules = () => {
    const complianceRules = getComplianceByEntityID(complianceID)
    setRules(complianceRules);
  }

  useEffect(() => {
    getRules();
  }, []);

  const toggleRuleForm = () => setComplianceForm(prevState => !prevState);

  return (
    <Grid>
      <Grid>
        {rules.map(rule => <ComplianceCard key={rule.id} id={rule.id}/>)}
      </Grid>
    </Grid>
  )

}