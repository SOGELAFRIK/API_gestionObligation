import React, { useEffect, useState } from "react";

// import { Helmet } from 'react-helmet';
import { Provider } from "react-redux";
import store from "../../../shared/redux/store";
import dynamic from "next/dynamic";

// import TabToTop from "../tab-to-top/tab-to-top";
import { useRouter } from "next/router";
// import Header from "../header/header";
const Switcher = dynamic(
  () => import("../../../shared/layout-components/switcher/switcher"),
  { ssr: false }
);
const Sidebar = dynamic(
  () => import("../../../shared/layout-components/sidebar/sidebar"),
  { ssr: false }
);

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Script from "next/script";
import Footer from "../../../shared/layout-components/footer/footer";
import Rightside from "../../../shared/layout-components/right-sidebar/right-sidebar";
import TabToTop from "../../../shared/layout-components/tab-to-top/tab-to-top";
import Header from "../../../shared/layout-components/header/header";
import { Helmet } from "react-helmet";
import { Box, Button, Input, Modal, Select } from "@mui/material";

export default function UsersIn() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function createData(
    Role = string,
    Right = string,
    
  ) {
    return { Role, Right };
  }
  const rows = [
    createData("Admin", "777"),
    createData("Employee", "775"),
    createData("Gestionnaire", "775" )
  ];

  return (
    <>
      <Helmet>
        <body className="ltr main-body leftmenu"></body>
      </Helmet>
      <Provider store={store}>
        <div className="horizontalMenucontainer">
          <div className="page">
            <Header />
            <Sidebar />

            <div className="main-content side-content pt-0">
              
              <div
                className="main-container container-fluid"
                // onClick={() => remove()}
              >
                <h1 color="red"></h1>
                <div className="inner-body" >
                <Button onClick={handleOpen}  className="float-md-right col-md-4" >CREER ROLE</Button>
               
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                sx={{marginLeft:'30%'}}
              >
                <Box width={450} bgcolor={"white"} mt={10} pl={2} pt={2} border={'2px solid black'} boxShadow={10} borderRadius={5}>
                  <Input type="text" placeholder="Role" sx={{marginBottom:1, marginRight:5}}/>
                  <Input type="text" placeholder="Description des droits"/><br/><br/>
                 
                  <Button onClick={handleClose} sx={{color:'gray'}}>fermer</Button>
                  <Button color="primary">Valider</Button>
                </Box>
              </Modal>
                  <TableContainer component={Paper} bgcolor={"white"} >
                    <Table sx={{ minWidth: 200, maxwidth:320 }}  aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Nom</TableCell>
                          <TableCell align="right">Role</TableCell>
                          <TableCell align="right">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.Role}
                            </TableCell>
                            <TableCell align="right">
                              {row.Right}
                            </TableCell>
                            <TableCell  align="center"  component="th" scope="row"  >
                              <i class="fas fa-edit col-md-3 " role="button" ></i>
                              <i class="fas fa-trash-alt " role="button"></i>
                                
                              
                            </TableCell>

                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {/* <{children}/> */}
                </div>
              </div>
            </div>
            <Rightside />
          </div>

          <Switcher />
          <TabToTop />
          <Footer />
        </div>
      </Provider>
    </>
  );
}
