import { useState } from "react";
import {
  Checkbox,
  FormControl,
  InputAdornment,
  InputBase,
  ListItemText,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import {
  ConceptsOptions,
  PricingDeliveryTimeOptions,
  RevisionOptions,
} from "../../Shared/dummyData";
import DoneIcon from "@mui/icons-material/Done";

const Pricing = () => {
  const [values, setValues] = useState({
    basicDeliveryTime: "",
    standardDeliveryTime: "",
    premiumDeliveryTime: "",
    basicRevisions: "",
    standardRevisions: "",
    premiumRevisions: "",
    basicConcepts: "",
    standardConcepts: "",
    premiumConcepts: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Typography variant="h5" color="#707070" fontWeight="600" mb={3}>
        PRICING STRATEGY
      </Typography>
      <TableContainer sx={{ border: "1px solid #C5C5C5" }}>
        <Table sx={{ tableLayout: { md: "fixed" } }} aria-label="pricing table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ borderBottom: 0 }}></TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "#fff",
                  bgcolor: "#1ebf73",
                  borderLeft: "0.5px solid #C5C5C5",
                  fontWeight: 600,
                }}
                className="fs-5 p-4"
              >
                BASIC
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "#fff",
                  bgcolor: "#1ebf73",
                  borderLeft: "0.5px solid #fff",
                  fontWeight: 600,
                }}
                className="fs-5 p-4"
              >
                STANDARD
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "#fff",
                  bgcolor: "#1ebf73",
                  borderLeft: "0.5px solid #fff",
                  fontWeight: 600,
                }}
                className="fs-5 p-4"
              >
                PREMIUM
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                rowSpan={4}
                align="center"
                sx={{
                  borderRight: "0.5px solid #C5C5C5",
                  verticalAlign: "bottom",
                  color: "#707070",
                  fontWeight: 600,
                }}
                className="fs-5 p-4"
              >
                Revisions
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <InputBase
                  placeholder="Your package name"
                  sx={{
                    height: 50,
                    fontWeight: 600,
                    textarea: { textAlign: "center" },
                  }}
                  className="fs-5 text-center"
                  maxRows={2}
                  multiline
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <InputBase
                  placeholder="Your package name"
                  sx={{
                    height: 50,
                    fontWeight: 600,
                    textarea: { textAlign: "center" },
                  }}
                  className="fs-5 text-center"
                  maxRows={2}
                  multiline
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <InputBase
                  placeholder="Your package name"
                  sx={{
                    height: 50,
                    fontWeight: 600,
                    textarea: { textAlign: "center" },
                  }}
                  className="fs-5 text-center"
                  maxRows={2}
                  multiline
                />
              </TableCell>
            </TableRow>

            {/*offering details */}

            <TableRow>
              <TableCell
                align="center"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                  py: 3,
                }}
              >
                <InputBase
                  placeholder="Details of your offering"
                  sx={{
                    height: 50,
                    fontWeight: 600,
                  }}
                  className="fs-5 text-center"
                  maxRows={3}
                  multiline
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                  py: 3,
                }}
              >
                <InputBase
                  placeholder="Details of your offering"
                  sx={{
                    height: 50,
                    fontWeight: 600,
                  }}
                  className="fs-5 text-center"
                  maxRows={3}
                  multiline
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                  py: 3,
                }}
              >
                <InputBase
                  placeholder="Details of your offering"
                  sx={{
                    height: 50,
                    fontWeight: 600,
                  }}
                  className="fs-5 text-center"
                  maxRows={3}
                  multiline
                />
              </TableCell>
            </TableRow>

            {/* Select Delivery Time */}

            <TableRow>
              <TableCell className="pe-0 py-4">
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    displayEmpty
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#707070",
                    }}
                    value={
                      values?.basicDeliveryTime ? values?.basicDeliveryTime : ""
                    }
                    renderValue={(selected) =>
                      selected ? selected : "Delivery time"
                    }
                    onChange={handleChange}
                    name="basicDeliveryTime"
                    input={<InputBase />}
                  >
                    {PricingDeliveryTimeOptions.map((item, idx) => (
                      <MenuItem key={idx} value={item.value}>
                        {values?.basicDeliveryTime === item.value ? (
                          <>
                            <Checkbox
                              disableRipple
                              size="small"
                              checked={true}
                              checkedIcon={<DoneIcon />}
                            />
                            <ListItemText
                              sx={{ py: 1, pl: 0.5 }}
                              primary={item.label}
                            />
                          </>
                        ) : (
                          <ListItemText
                            sx={{ py: 1, pl: 5 }}
                            primary={item.label}
                          />
                        )}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell
                className="pe-0 py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    displayEmpty
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#707070",
                    }}
                    value={
                      values?.standardDeliveryTime
                        ? values?.standardDeliveryTime
                        : ""
                    }
                    renderValue={(selected) =>
                      selected ? selected : "Delivery time"
                    }
                    onChange={handleChange}
                    name="standardDeliveryTime"
                    input={<InputBase />}
                  >
                    {PricingDeliveryTimeOptions.map((item, idx) => (
                      <MenuItem key={idx} value={item.value}>
                        {values?.standardDeliveryTime === item.value ? (
                          <>
                            <Checkbox
                              disableRipple
                              size="small"
                              checked={true}
                              checkedIcon={<DoneIcon />}
                            />
                            <ListItemText
                              sx={{ py: 1, pl: 0.5 }}
                              primary={item.label}
                            />
                          </>
                        ) : (
                          <ListItemText
                            sx={{ py: 1, pl: 5 }}
                            primary={item.label}
                          />
                        )}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell
                className="pe-0 py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    displayEmpty
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#707070",
                    }}
                    value={
                      values?.premiumDeliveryTime
                        ? values?.premiumDeliveryTime
                        : ""
                    }
                    renderValue={(selected) =>
                      selected ? selected : "Delivery time"
                    }
                    onChange={handleChange}
                    name="premiumDeliveryTime"
                    input={<InputBase />}
                  >
                    {PricingDeliveryTimeOptions.map((item, idx) => (
                      <MenuItem key={idx} value={item.value}>
                        {values?.premiumDeliveryTime === item.value ? (
                          <>
                            <Checkbox
                              disableRipple
                              size="small"
                              checked={true}
                              checkedIcon={<DoneIcon />}
                            />
                            <ListItemText
                              sx={{ py: 1, pl: 0.5 }}
                              primary={item.label}
                            />
                          </>
                        ) : (
                          <ListItemText
                            sx={{ py: 1, pl: 5 }}
                            primary={item.label}
                          />
                        )}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>

            {/* select Revisions */}

            <TableRow>
              <TableCell className="pe-0 py-4">
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    displayEmpty
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#707070",
                    }}
                    value={values?.basicRevisions ? values?.basicRevisions : ""}
                    renderValue={(selected) => (selected ? selected : "Select")}
                    onChange={handleChange}
                    name="basicRevisions"
                    input={<InputBase />}
                  >
                    {RevisionOptions.map((item, idx) => (
                      <MenuItem key={idx} value={item.value}>
                        {values?.basicRevisions === item.value ? (
                          <>
                            <Checkbox
                              disableRipple
                              size="small"
                              checked={true}
                              checkedIcon={<DoneIcon />}
                            />
                            <ListItemText
                              sx={{ py: 1, pl: 0.5 }}
                              primary={item.label}
                            />
                          </>
                        ) : (
                          <ListItemText
                            sx={{ py: 1, pl: 5 }}
                            primary={item.label}
                          />
                        )}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell
                className="pe-0 py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    displayEmpty
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#707070",
                    }}
                    value={
                      values?.standardRevisions ? values?.standardRevisions : ""
                    }
                    renderValue={(selected) => (selected ? selected : "Select")}
                    onChange={handleChange}
                    name="standardRevisions"
                    input={<InputBase />}
                  >
                    {RevisionOptions.map((item, idx) => (
                      <MenuItem key={idx} value={item.value}>
                        {values?.standardRevisions === item.value ? (
                          <>
                            <Checkbox
                              disableRipple
                              size="small"
                              checked={true}
                              checkedIcon={<DoneIcon />}
                            />
                            <ListItemText
                              sx={{ py: 1, pl: 0.5 }}
                              primary={item.label}
                            />
                          </>
                        ) : (
                          <ListItemText
                            sx={{ py: 1, pl: 5 }}
                            primary={item.label}
                          />
                        )}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell
                className="pe-0 py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    displayEmpty
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#707070",
                    }}
                    value={
                      values?.premiumRevisions ? values?.premiumRevisions : ""
                    }
                    renderValue={(selected) => (selected ? selected : "Select")}
                    onChange={handleChange}
                    name="premiumRevisions"
                    input={<InputBase />}
                  >
                    {RevisionOptions.map((item, idx) => (
                      <MenuItem key={idx} value={item.value}>
                        {values?.premiumRevisions === item.value ? (
                          <>
                            <Checkbox
                              disableRipple
                              size="small"
                              checked={true}
                              checkedIcon={<DoneIcon />}
                            />
                            <ListItemText
                              sx={{ py: 1, pl: 0.5 }}
                              primary={item.label}
                            />
                          </>
                        ) : (
                          <ListItemText
                            sx={{ py: 1, pl: 5 }}
                            primary={item.label}
                          />
                        )}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>

            {/* No. of concepts included */}

            <TableRow>
              <TableCell
                align="center"
                sx={{
                  borderRight: "0.5px solid #C5C5C5",
                  textAlign: "start",
                  color: "#707070",
                  fontWeight: 600,
                }}
                className="fs-5 p-4"
              >
                No. of concepts included
              </TableCell>
              <TableCell className="pe-0 py-4">
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    displayEmpty
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#707070",
                    }}
                    value={values?.basicConcepts ? values?.basicConcepts : ""}
                    renderValue={(selected) => (selected ? selected : "Select")}
                    onChange={handleChange}
                    name="basicConcepts"
                    input={<InputBase />}
                  >
                    {ConceptsOptions.map((item, idx) => (
                      <MenuItem key={idx} value={item.value}>
                        {values?.basicConcepts === item.value ? (
                          <>
                            <Checkbox
                              disableRipple
                              size="small"
                              checked={true}
                              checkedIcon={<DoneIcon />}
                            />
                            <ListItemText
                              sx={{ py: 1, pl: 0.5 }}
                              primary={item.label}
                            />
                          </>
                        ) : (
                          <ListItemText
                            sx={{ py: 1, pl: 5 }}
                            primary={item.label}
                          />
                        )}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell
                className="pe-0 py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    displayEmpty
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#707070",
                    }}
                    value={
                      values?.standardConcepts ? values?.standardConcepts : ""
                    }
                    renderValue={(selected) => (selected ? selected : "Select")}
                    onChange={handleChange}
                    name="standardConcepts"
                    input={<InputBase />}
                  >
                    {ConceptsOptions.map((item, idx) => (
                      <MenuItem key={idx} value={item.value}>
                        {values?.standardConcepts === item.value ? (
                          <>
                            <Checkbox
                              disableRipple
                              size="small"
                              checked={true}
                              checkedIcon={<DoneIcon />}
                            />
                            <ListItemText
                              sx={{ py: 1, pl: 0.5 }}
                              primary={item.label}
                            />
                          </>
                        ) : (
                          <ListItemText
                            sx={{ py: 1, pl: 5 }}
                            primary={item.label}
                          />
                        )}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell
                className="pe-0 py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <FormControl sx={{ width: "100%" }}>
                  <Select
                    displayEmpty
                    sx={{
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#707070",
                    }}
                    value={
                      values?.premiumConcepts ? values?.premiumConcepts : ""
                    }
                    renderValue={(selected) => (selected ? selected : "Select")}
                    onChange={handleChange}
                    name="premiumConcepts"
                    input={<InputBase />}
                  >
                    {ConceptsOptions.map((item, idx) => (
                      <MenuItem key={idx} value={item.value}>
                        {values?.premiumConcepts === item.value ? (
                          <>
                            <Checkbox
                              disableRipple
                              size="small"
                              checked={true}
                              checkedIcon={<DoneIcon />}
                            />
                            <ListItemText
                              sx={{ py: 1, pl: 0.5 }}
                              primary={item.label}
                            />
                          </>
                        ) : (
                          <ListItemText
                            sx={{ py: 1, pl: 5 }}
                            primary={item.label}
                          />
                        )}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>

            {/* Logo transparency */}

            <TableRow>
              <TableCell
                align="center"
                sx={{
                  borderRight: "0.5px solid #C5C5C5",
                  textAlign: "start",
                  color: "#707070",
                  fontWeight: 600,
                }}
                className="fs-5 p-4"
              >
                Logo transparency
              </TableCell>
              <TableCell className="text-center py-4">
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
            </TableRow>

            {/* Vector file */}

            <TableRow>
              <TableCell
                align="center"
                sx={{
                  borderRight: "0.5px solid #C5C5C5",
                  textAlign: "start",
                  color: "#707070",
                  fontWeight: 600,
                }}
                className="fs-5 p-4"
              >
                Vector file
              </TableCell>
              <TableCell className="text-center py-4">
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
            </TableRow>

            {/* Printable file */}

            <TableRow>
              <TableCell
                align="center"
                sx={{
                  borderRight: "0.5px solid #C5C5C5",
                  textAlign: "start",
                  color: "#707070",
                  fontWeight: 600,
                }}
                className="fs-5 p-4"
              >
                Printable file
              </TableCell>
              <TableCell className="text-center py-4">
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
            </TableRow>

            {/* 3D mockup */}

            <TableRow>
              <TableCell
                align="center"
                sx={{
                  borderRight: "0.5px solid #C5C5C5",
                  textAlign: "start",
                  color: "#707070",
                  fontWeight: 600,
                }}
                className="fs-5 p-4"
              >
                3D mockup
              </TableCell>
              <TableCell className="text-center py-4">
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
            </TableRow>

            {/* Source file */}

            <TableRow>
              <TableCell
                align="center"
                sx={{
                  borderRight: "0.5px solid #C5C5C5",
                  textAlign: "start",
                  color: "#707070",
                  fontWeight: 600,
                }}
                className="fs-5 p-4"
              >
                Source file
              </TableCell>
              <TableCell className="text-center py-4">
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
            </TableRow>

            {/* Stationery designs */}

            <TableRow>
              <TableCell
                align="center"
                sx={{
                  borderRight: "0.5px solid #C5C5C5",
                  textAlign: "start",
                  color: "#707070",
                  fontWeight: 600,
                }}
                className="fs-5 p-4"
              >
                Stationery designs
              </TableCell>
              <TableCell className="text-center py-4">
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
            </TableRow>

            {/* Stationery designs */}

            <TableRow>
              <TableCell
                align="center"
                sx={{
                  borderRight: "0.5px solid #C5C5C5",
                  textAlign: "start",
                  color: "#707070",
                  fontWeight: 600,
                }}
                className="fs-5 p-4"
              >
                Social media kit
              </TableCell>
              <TableCell className="text-center py-4">
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
            </TableRow>

            {/* Price */}

            <TableRow>
              <TableCell
                sx={{
                  borderRight: "0.5px solid #C5C5C5",
                  color: "#707070",
                  fontWeight: 600,
                }}
                className="fs-5 p-4"
              >
                Price
              </TableCell>
              <TableCell className="py-4">
                <InputBase
                  type="number"
                  sx={{
                    height: 50,
                    fontWeight: 600,
                    textarea: { textAlign: "center" },
                  }}
                  inputProps={{ min: 0 }}
                  className="fs-5 text-center"
                  endAdornment={
                    <InputAdornment position="end">
                      <Typography
                        variant="h6"
                        sx={{ color: "#1ebf73", fontWeight: "500", px: 1 }}
                      >
                        $
                      </Typography>
                    </InputAdornment>
                  }
                />
              </TableCell>
              <TableCell
                className="py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <InputBase
                  type="number"
                  sx={{
                    height: 50,
                    fontWeight: 600,
                    textarea: { textAlign: "center" },
                  }}
                  inputProps={{ min: 0 }}
                  className="fs-5 text-center"
                  endAdornment={
                    <InputAdornment position="end">
                      <Typography
                        variant="h6"
                        sx={{ color: "#1ebf73", fontWeight: "500", px: 1 }}
                      >
                        $
                      </Typography>
                    </InputAdornment>
                  }
                />
              </TableCell>
              <TableCell
                className="py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <InputBase
                  type="number"
                  sx={{
                    height: 50,
                    fontWeight: 600,
                    textarea: { textAlign: "center" },
                  }}
                  inputProps={{ min: 0 }}
                  className="fs-5 text-center"
                  endAdornment={
                    <InputAdornment position="end">
                      <Typography
                        variant="h6"
                        sx={{ color: "#1ebf73", fontWeight: "500", px: 1 }}
                      >
                        $
                      </Typography>
                    </InputAdornment>
                  }
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" color="#707070" fontWeight="600" mb={3} mt={5}>
        ADD EXTRA SERVICES
      </Typography>
      <TableContainer sx={{ border: "1px solid #C5C5C5" }}>
        <Table
          sx={{ tableLayout: { md: "fixed" } }}
          aria-label="add extra services table"
        >
          <TableBody>
            <TableRow>
              <TableCell colSpan={4} className="p-4">
                <Box className="d-flex justify-content-between align-items-center w-100">
                  <Box className="d-flex align-items-center">
                    <Checkbox
                      color="green"
                      sx={{
                        color: "rgb(0 0 0 / 38%)",
                      }}
                    />
                    <Typography
                      noWrap
                      color="#707070"
                      sx={{
                        fontWeight: 600,
                      }}
                      className="fs-5"
                    >
                      Extra fast delivery
                    </Typography>
                  </Box>
                  <Box className="d-flex align-items-center ms-4">
                    <Typography variant="body1" nowrap>
                      for an extra
                    </Typography>
                    <TextField
                      type="number"
                      size="small"
                      className="ps-3 pe-1"
                      inputProps={{
                        min: 0,
                        style: {
                          width: "80px",
                          height: "16px",
                          fontSize: "14px",
                        },
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ color: "#1ebf73" }}
                      className="fw-bold"
                    >
                      $
                    </Typography>

                    <Typography variant="body1" pl={3} nowrap>
                      an additional
                    </Typography>
                    <TextField
                      type="number"
                      size="small"
                      className="ps-3 pe-1"
                      inputProps={{
                        min: 0,
                        style: {
                          width: "80px",
                          height: "16px",
                          fontSize: "14px",
                        },
                      }}
                    />
                  </Box>
                </Box>
              </TableCell>
            </TableRow>

            {/*offering details */}

            <TableRow>
              <TableCell
                align="center"
                sx={{
                  borderRight: "0.5px solid #C5C5C5",
                  textAlign: "start",
                  color: "#707070",
                  fontWeight: 600,
                }}
                className="fs-5 p-4"
              >
                3D mockup
              </TableCell>
              <TableCell className="text-center py-4">
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
              <TableCell
                className="text-center py-4"
                sx={{
                  borderLeft: "0.5px solid #C5C5C5",
                }}
              >
                <Checkbox
                  color="green"
                  sx={{
                    color: "rgb(0 0 0 / 38%)",
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Pricing;
