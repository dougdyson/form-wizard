import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

import { Grid } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { getComplianceByEntityID } from '../../data/data'

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
        
      </Grid>
    </Grid>
  )

}