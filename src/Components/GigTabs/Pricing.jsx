import { useState } from "react";
import {
  Checkbox,
  FormControl,
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
    <TableContainer sx={{ border: "1px solid #C5C5C5", borderRadius: "8px" }}>
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
                  renderValue={(selected) =>
                    selected ? selected : "Select"
                  }
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
                  renderValue={(selected) =>
                    selected ? selected : "Select"
                  }
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
                  renderValue={(selected) =>
                    selected ? selected : "Select"
                  }
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
                  renderValue={(selected) =>
                    selected ? selected : "Select"
                  }
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
                  renderValue={(selected) =>
                    selected ? selected : "Select"
                  }
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
                  renderValue={(selected) =>
                    selected ? selected : "Select"
                  }
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

          
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Pricing;
