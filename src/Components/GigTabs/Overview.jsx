import {
  Autocomplete,
  Box,
  Chip,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { LoadingButton } from "@mui/lab";
import "./styles.scss";

const OverviewSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required("Required")
    .test("len", "Max 90 characters", (val) => val?.length <= 90),
  category: Yup.string().required("Required"),
  subcategory: Yup.string().required("Required"),
  searchTags: Yup.array().of(
    Yup.string().test("alphnumeric", "Use letters and numbers only.", (arr) => {
      let regx = /[^A-Za-z0-9]+/;
      return !regx.test(arr);
    })
  ),
});

const Overview = ({ setActiveTab }) => {
  const handleOverview = async (values, setSubmitting) => {
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
      setActiveTab(1);
    }, 1500);
  };

  return (
    <Formik
      initialValues={{
        title: "",
        category: "",
        subcategory: "",
        searchTags: [],
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleOverview(values, setSubmitting);
      }}
      validationSchema={OverviewSchema}
    >
      {({
        submitForm,
        isSubmitting,
        handleChange,
        touched,
        errors,
        values,
        setFieldValue,
      }) => (
        <Form>
          <Grid container className="overview-tab">
            <Grid item xs={12} margin={1}>
              <InputLabel className="label">GIG TITLE</InputLabel>
              <TextField
                className="gig-title"
                margin="dense"
                name="title"
                multiline
                rows={3}
                maxRows={3}
                inputProps={{ maxLength: 90 }}
                fullWidth
                onChange={handleChange}
                error={touched.title && Boolean(errors.title)}
                helperText={touched.title && errors.title}
              />
              <Box className="text-end">
                <Typography variant="caption" color="#707070" component="p">
                  {values.title.length}/90 max
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mt={4}>
              <InputLabel className="label">CATEGORY</InputLabel>
            </Grid>
            <Grid item xs={12} md={6} mb={1} pr={{ md: 3 }}>
              <TextField
                select
                margin="dense"
                fullWidth
                name="category"
                label={values.category ? "" : "Select a category"}
                InputLabelProps={{ shrink: false }}
                onChange={(e) => {
                  handleChange(e);
                  setTimeout(() => {
                    setFieldValue("subcategory", "");
                  }, 500);
                }}
                error={touched.category && Boolean(errors.category)}
                helperText={touched.category && errors.category}
              >
                {CatOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6} mb={1} pl={{ md: 3 }}>
              <TextField
                select
                margin="dense"
                fullWidth
                name="subcategory"
                label={values.subcategory ? "" : "Select a subcategory"}
                InputLabelProps={{ shrink: false }}
                onChange={handleChange}
                error={touched.subcategory && Boolean(errors.subcategory)}
                helperText={touched.subcategory && errors.subcategory}
              >
                {SubCatOptions.filter(
                  (cat) => cat.name === values.category
                ).map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} mb={1} mt={5}>
              <InputLabel className="label">SEARCH TAGS</InputLabel>
              <Autocomplete
                multiple
                className="fs-6 mt-2"
                name="searchTags"
                options={[]}
                value={values.searchTags}
                onChange={(e, newVal) => {
                  if (newVal.length <= 5) {
                    setFieldValue("searchTags", newVal);
                  }
                }}
                disableClearable
                freeSolo
                renderTags={(value, getTagProps) =>
                  value?.map((option, index) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      sx={{ fontSize: "1rem" }}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    margin="dense"
                    sx={{
                      "& .MuiInputBase-root": {
                        minHeight: "150px",
                        alignContent: "flex-start",
                      },
                      "& .MuiFormHelperText-root": {
                        marginLeft: "0px",
                        marginTop: "15px",
                        fontSize: 12,
                      },
                    }}
                    inputProps={
                      values.searchTags.length >= 5
                        ? { ...params.inputProps, maxLength: 0 }
                        : { ...params.inputProps }
                    }
                    error={touched.searchTags && Boolean(errors.searchTags)}
                    helperText={
                      touched.searchTags && errors.searchTags
                        ? errors.searchTags
                        : "5 tags maximum. Use letters and numbers only."
                    }
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} margin={1} className="text-end mt-4">
              <LoadingButton
                onClick={submitForm}
                className="green-btn"
                size="large"
                variant="contained"
                color="green"
                loadingPosition="start"
                loading={isSubmitting}
              >
                Save & continue
              </LoadingButton>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

const CatOptions = [
  { value: "Graphics & Design", label: "Graphics & Design" },
  { value: "Music & Audio", label: "Music & Audio" },
  { value: "Programming & Tech", label: "Programming & Tech" },
  { value: "Digital Marketing", label: "Digital Marketing" },
];

const SubCatOptions = [
  { name: "Graphics & Design", value: "Logo Design", label: "Logo Design" },
  {
    name: "Graphics & Design",
    value: "Website Design",
    label: "Website Design",
  },
  { name: "Graphics & Design", value: "App Design", label: "App Design" },
  { name: "Graphics & Design", value: "UX Design", label: "UX Design" },
  { name: "Music & Audio", value: "Voice Over", label: "Voice Over" },
  {
    name: "Music & Audio",
    value: "Singers & Vocalists",
    label: "Singers & Vocalists",
  },
  { name: "Music & Audio", value: "Songwriters", label: "Songwriters" },
  { name: "Music & Audio", value: "Audio Editing", label: "Audio Editing" },
  {
    name: "Music & Audio",
    value: "Podcast Production",
    label: "Podcast Production",
  },
  {
    name: "Programming & Tech",
    value: "Website Development",
    label: "Website Development",
  },
  {
    name: "Programming & Tech",
    value: "Game Development",
    label: "Game Development",
  },
  {
    name: "Programming & Tech",
    value: "E-Commerce Development",
    label: "E-Commerce Development",
  },
  { name: "Programming & Tech", value: "Mobile Apps", label: "Mobile Apps" },
  {
    name: "Programming & Tech",
    value: "Blockchain & Cryptocurrency",
    label: "Blockchain & Cryptocurrency",
  },
  {
    name: "Digital Marketing",
    value: "Search Engine Optimization (SEO)",
    label: "Search Engine Optimization (SEO)",
  },
  {
    name: "Digital Marketing",
    value: "Social Media Marketing",
    label: "Social Media Marketing",
  },
  {
    name: "Digital Marketing",
    value: "Book & eBook Marketing",
    label: "Book & eBook Marketing",
  },
  { name: "Digital Marketing", value: "Monetization", label: "Monetization" },
  {
    name: "Digital Marketing",
    value: "E-Commerce Marketing",
    label: "E-Commerce Marketing",
  },
];

export default Overview;
