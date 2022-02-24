import React from "react";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { getComplianceByEntityID } from '../../data/data'

function ComplianceList(props) {
  
  const [complianceForm, setComplianceForm] = useState(false);
  const [rules, setRules] = useState(null);

  const getRules = () => {
    const complianceRules = getComplianceByEntityID(props.id)
    setRules(complianceRules);
  }

  useEffect(() => {
    getRules();
  }, []);

  const toggleRuleForm = () => setComplianceForm(prevState => !prevState);


  return (
    <Grid>
      <Grid>
        {rules.map(rule => console.log(rules))}
      </Grid>
    </Grid>
  )
}

export default ComplianceList;