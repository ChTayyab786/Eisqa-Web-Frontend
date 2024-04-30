import { useState } from "react";
import { Typography, Grid, Box, Tabs, Tab, styled } from "@mui/material";
import "./styles.scss";
import Overview from "../../../Components/GigTabs/Overview";
import Pricing from "../../../Components/GigTabs/Pricing";

const Gigs = () => {
  // state
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Box className="create-gig-page">
      <Grid
        container
        sx={{ p: { md: 5, xs: 3 }, mt: { md: 3, xs: 0 } }}
        rowSpacing={2}
        columnSpacing={{ md: 5, xs: 1 }}
      >
        <Grid item xs={12}>
          <Typography variant="h6" className="heading">
            Create a <span>new Gig</span>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", Py: 2 }}
        >
          <CustomTabs
            value={activeTab}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs"
          >
            {TabLabels.map((label, idx) => (
              <CustomTab
                label={<span>{label}</span>}
                key={idx}
                {...a11yProps(idx)}
              />
            ))}
          </CustomTabs>
        </Grid>
        <Grid item xs={12} className="tab">
          <TabPanel value={activeTab} index={0}>
            <Overview setActiveTab={(tab) => setActiveTab(tab)} />
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            <Pricing setActiveTab={(tab) => setActiveTab(tab)} />
          </TabPanel>
        </Grid>
      </Grid>
    </Box>
  );
};

const CustomTabs = styled(Tabs)({
  borderBottom: "1px solid #707070",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1EBF73",
  },
  "& ::first-letter": {
    color: "#1EBF73",
    fontWeight: 500,
  },
  "& span": {
    color: "#707070",
    fontWeight: 500,
  },
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    marginRight: theme.spacing(2),
    textTransform: "none",
    paddingLeft: "4px",
    paddingBottom: "2px",
    "&.MuiButtonBase-root": {
      cursor: "default !important",
    },
    "&.MuiButtonBase-root:last-child": {
      marginRight: theme.spacing(0),
      paddingRight: "0px",
    },
  })
);

const TabLabels = [
  "1. Overview",
  "2. Pricing",
  "3. Description & FAQ",
  "4. Requirements",
  "5. Gallery",
  "6. Public",
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default Gigs;
