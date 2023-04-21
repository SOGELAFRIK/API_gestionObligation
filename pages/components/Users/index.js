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
import axios from "axios";

export default function UsersIn() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // recuperation de la liste des utilisateurs 
  const [err, setErr] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/api/user', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((response) => {
        // on recupère la liste des utilisateur dans data 
        setData(response.data.data)
        setErr('')
      })
      .catch((error) => {
        // Si la connexion a échoué, affichez un message d'erreur en console
        setErr(error.response.data.message)
      });
  }, [data])

  // supprimer un user 
  /*const deleteUser = (id) => {
    console.log('bjr')
    axios.delete(`http://localhost:4000/api/user/${JSON.stringify(id)}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((response) => {
        console.log(response.data.message)
        setErr('')
      })
      .catch((error) => {
        // Si la connexion a échoué, affichez un message d'erreur en console 
        setErr(error.response.data.message)
      });
  }*/

  // creation d'un nouvelle utilisateur 
  const [newUser, setNewUser] = useState({
    "nom": "",
    "email": "",
    "mot_de_passe": "",
    "id_entite": 1,
    "role_id": 1
  });
  const { nom, email, mot_de_passe, id_entite, role_id } = newUser;
  const changeHandler = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }
  const creatUser = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/api/user', JSON.stringify(newUser), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((response) => {
        // Si la connexion est réussie, redirigez l'utilisateur vers la page de dashboard
        console.log(response.data.message);
        setNewUser({
          "nom": "",
          "email": "",
          "mot_de_passe": "",
          "id_entite": 1,
          "role_id": 1
        });
        handleClose()
      })
      .catch((error) => {
        // Si la connexion a échoué, affichez un message d'erreur à l'utilisateur
        console.log(error.response.data.message);
      });
  }


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
                  {/* ouverture de la capsule  */}
                  <Button onClick={handleOpen} className="float-md-right col-md-4" >CREER UTILISATEUR</Button>

                  {/* campsule pour la creation des utilisateur  */}
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                    sx={{ marginLeft: '30%' }}
                  >
                    <Box width={450} bgcolor={"white"} mt={10} pl={2} pt={2} boxShadow={10}>
                      <Input
                        type="text" name="nom" placeholder="Nom"
                        value={nom} onChange={changeHandler} required
                        sx={{ marginBottom: 1, marginRight: 5 }}
                      />
                      <Input
                        type="number" name="id_entite" placeholder="id entite"
                        value={id_entite} onChange={changeHandler}
                      /><br /><br />
                      <Input
                        type="number" name="role_id" placeholder="id role"
                        value={role_id} onChange={changeHandler}
                        sx={{ marginBottom: 1, marginRight: 5 }}
                      />
                      <Input
                        type="email" name="email" placeholder="email"
                        value={email} onChange={changeHandler}
                      /><br /><br />
                      <Input
                        type="Password" name="mot_de_passe" placeholder="Mot de passe"
                        value={mot_de_passe} onChange={changeHandler}
                        sx={{ marginBottom: 1, marginRight: 5 }}
                      />
                      {/* <select className="col-md-5">
                        <option>role1</option>
                        <option>role2</option>
                        <option>role3</option>
                        <option>role4</option>
                        <option>role5</option>
                      </select><br /><br /> */}
                      <Button onClick={handleClose} sx={{ color: 'gray' }}>fermer</Button>
                      <Button color="primary" onClick={creatUser} variant="contained">Valider</Button>
                    </Box>
                  </Modal>

                  {/* le tableau des utilisateur  */}
                  <TableContainer variant="outlined" component={Paper} bgcolor={"white"} >
                    <Table sx={{ minWidth: 320 }} aria-label="simple table">
                      {/* les entetes de colones  */}
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">Id</TableCell>
                          <TableCell align="center">Nom</TableCell>
                          <TableCell align="center">Email</TableCell>
                          {/* <TableCell align="right">MDP</TableCell> */}
                          <TableCell align="center">Role</TableCell>
                          <TableCell align="center">Entite</TableCell>
                          <TableCell align="center">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      {/* le corps du tableau  */}
                      <TableBody>
                        {/* map de ligne  */}
                        {data.map((user) => (
                          <TableRow
                            key={user.id_utilisateur}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            {/* l'id de l'utilisateur  */}
                            <TableCell component="th" align="center">{user.id_utilisateur}</TableCell>
                            {/* le nom de l'utilisateur  */}
                            <TableCell align="center">{user.nom}</TableCell>
                            {/* l'email de l'utilisateur  */}
                            <TableCell align="center">{user.email}</TableCell>
                            {/* le mdp de l'utilisateur  */}
                            {/* <TableCell align="right">{user.mot_de_passe}</TableCell> */}
                            {/* l'id de l'entite  */}
                            <TableCell align="center">{user.id_entite}</TableCell>
                            {/* l'id du role de l'utilisateur */}
                            <TableCell align="center">{user.role_id}</TableCell>
                            {/* la colone des actions  */}
                            <TableCell align="center" sx={{ justifyContent: 'space-around'}} >
                              <i className="fas fa-edit mr-2 " role="button" onClick={handleOpen}></i>
                              <i className="fas fa-trash-alt " role="button"></i>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {/* fin tableau  */}
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
