import { Helmet } from "react-helmet"
import Seo from "../shared/layout-components/seo/seo"
import { Box, Button, FormControl, FormControlLabel, Input, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useState } from "react";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const AddText=()=>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
            <Seo title="AJOUTER TEXTE" />
      <Helmet>
        <body className="ltr main-body leftmenu"></body>
      </Helmet>
      <div className="inner-body mt-3">
            <Box>
            <Button onClick={handleOpen} className="float-md-right btn btn-primary ">AJOUTER TEXTE</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
        CHAMP D'AJOUT DE TEXTE
    </Typography>
    <Box id="modal-modal-description" sx={{ mt: 2 }} >
        <FormControl>
          
           <TextField  required  id="outlined-basic" label="TITRE DU TEXTE" sx={{width:"300px"}} variant="outlined" className="m-3" />
        </FormControl>
        <FormControl>
          
           <TextField  required  id="outlined-basic" label="Contenu du texte" variant="outlined" sx={{width:"300px"}} className="m-3"  rows={4} multiline />
        </FormControl>
        <Box>
            <Button onClick={()=>handleClose()} className="float-md-right btn btn-secondary">Fermer</Button>
            <Button className="float-md-left btn btn-primary">Valider</Button>
        </Box>
    </Box>
  </Box>
</Modal>
            </Box>
            <TableContainer    sx={{ colorScheme:'white'}} >
                    <Table sx={{ minWidth: 320,backgroundColor:'white', colorScheme:'white' }}  aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Titre</TableCell>
                          <TableCell align="right">Corps du texte</TableCell>
                          <TableCell align="right">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      <TableRow>
                            <TableCell component="th" scope="row">
                              CIrculaire n-01-02-2002 ....
                            </TableCell>
                            <TableCell align="right">DONNES TEST</TableCell>
                           
                            <TableCell className="flex"  align="right"sx={{justifyContent:'space-around'}} >
                              <i className="fas fa-edit me-5" role="button" ></i>
                              <i className="fas fa-trash-alt   " role="button"></i>
                            </TableCell>

                          </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
      </div>
        </>
    )
}
AddText.layout="Contentlayout"
export default AddText