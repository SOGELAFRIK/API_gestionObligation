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
    name = string,
    surname = number,
    number = number,
    email = number,
    role = number,
    role1 = number,
    role2 = number,
    role3 = number,
    role4 = number,
    role5 = number,
    role6 = number,
    role7 = number,
    
  ) {
    return { name, surname, number, email, role, role1, role2, role3, role4, role5,role6,role7, };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0,3,3,3,3,3,34,43),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
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
                <div className="inner-body">
                  <Button
                  variant="contained"
                    sx={{color:"white",backgroundColor:"blue"}}
                    
                    onClick={handleOpen}
                    className="float-md-right btn btn-primary "
                  >
                    CREER UN SUIVI D'OBLIGATION
                  </Button>

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                    sx={{ marginLeft: "30%" }}
                  >
                    <Box
                      width={450}
                      bgcolor={"white"}
                      mt={10}
                      pl={2}
                      pt={2}
                      border={"2px solid black"}
                      boxShadow={10}
                      borderRadius={5}
                    >
                      <Input
                        type="text"
                        placeholder="intitule de l'obligation"
                        sx={{ marginBottom: 1, marginRight: 5 }}
                      />
                      <Input type="date" placeholder="date de debut" />
                      <br />
                      <br />
                      <Input
                        type="date"
                        placeholder="date de fin"
                        sx={{ marginBottom: 1, marginRight: 5 }}
                      />
                      <Input type="text" placeholder="responsable" />
                      <br />
                      <br />
                      <Input
                        type="textarea"
                        placeholder="observations"
                        sx={{ marginBottom: 1, marginRight: 5 }}
                      />
                     
                      <br />
                      <Button onClick={handleClose} sx={{ color: "gray" }}>
                        Fermer
                      </Button>
                      <Button color="primary">Valider</Button>
                    </Box>
                  </Modal>
                  <TableContainer
                    component={Paper}
                    variant="outlined"
                    
                    bgcolor={"white"}
                    sx={{ backgroundColor: "white", colorScheme: "white" }}
                  >
                    <Table sx={{ minWidth: 320 }} aria-label="simple table">
                      <TableHead>
                        <TableRow sx={{fontSize:"30px",fontWeight:"bold"}}>
       
                          <TableCell >Numero de Suivi</TableCell>
                          <TableCell align="right">Obligation</TableCell>
                          <TableCell align="right">Controlleur</TableCell>
                          <TableCell align="right">Utilisateur</TableCell>
                          <TableCell align="right">Status Conformite</TableCell>
                          <TableCell align="right">Date de suivi</TableCell>
                          <TableCell align="right">Commentaire Controlleur</TableCell>
                          <TableCell align="right">Fichier de Controlle</TableCell>
                          <TableCell align="right">Echeance a Venir</TableCell>
                          <TableCell align="right">Echeance Passee</TableCell>
                          <TableCell align="right">Recommandation</TableCell>
                          <TableCell align="right">Plan d'Action</TableCell>
                          <TableCell align="right">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.name} sx={{}}>
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.surname}</TableCell>
                            <TableCell align="right">{row.number}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.role}</TableCell>
                            <TableCell align="right">{row.role1}</TableCell>
                            <TableCell align="right">{row.role2}</TableCell>
                            <TableCell align="right">{row.role3}</TableCell>
                            <TableCell align="right">{row.role4}</TableCell>
                            <TableCell align="right">{row.role5}</TableCell>
                            <TableCell align="right">{row.role6}</TableCell>
                            <TableCell align="right">{row.role7}</TableCell>
                            <TableCell
                              align="center"
                              spacing="4px"
                              sx={{ justifyContent: "space-around" }}
                            >
                              
                              <i class="fas fa-edit mr-2 " role="button"></i>
                              <i class="fas fa-trash-alt " role="button"></i>
                              <i class="fas fa-file-export    "></i>
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
