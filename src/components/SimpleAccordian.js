import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Referral Process and Eligibility</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The Office of the State Attorney must approve any individual interested in participating in the pretrial diversion program. Successful completion of the diversion option will result in the Court's dismissal of the felony charges filed against the individual. The Drug Court program is part of the second circuit Criminal Case Management Unit. Any case recommended to the Drug Court from the trial court must have a Referral Form completed and transmitted to the Criminal Case Management Unit, see the Referral Form click box to the left of this page.
          Eligibility and exclusion criteria for the Drug Court are predicated on empirical evidence indicating which types of offenders can be treated safely and effectively in the program. Candidates are evaluated for admission to the Drug Court using evidence-based assessment tools and procedures. The team works to meet the risk and need levels of the participants. Eligible participants enter into an agreed contract that outlines their successful commitment to the program. The general Drug Court Participant's SET UP FOR SUCCESS includes:   
          - Clean and Sober
          - Have a job, attending school, or have some other legal/sustainable way to support themselves
          - Housing
          - Paid Fees 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Fees</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Program fees are $95.00 per month for a minimum of twelve (12) months and each additional month in the program. 
          The program usually lasts from 12 to 18 months depending on individual progress. It is the participant's responsibility to pay fees while in the Drug Court program. 
          Other fees may be incurred in addition to the regular program fees such as: additional testing or with positive results reported that require additional testing, treatment provider fees, service agency fees, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}> Program Contact </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The coordinator for the Leon County Drug Court is housed in the Second Judicial Circuit's Office of the Court Administrator. For the Court's program coordinator:

          Jawanza Pipkin
          Telephone: 850-606-4425 or
          Email PipkinJ@leoncountyfl.gov
          
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}