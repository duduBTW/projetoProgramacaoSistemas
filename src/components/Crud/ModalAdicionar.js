import React from "react";

import {
  Dialog,
  makeStyles,
  Slide,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalAdicionar({
  openModal,
  title,
  tipos,
  cancelar,
  confirmar,
  defaultData,
  onSubmit,
  editModal,
  children,
  fullScreen = false,
}) {
  return (
    <Dialog
      fullWidth="true"
      maxWidth="md"
      fullScreen={fullScreen}
      // scroll="paper"
      open={openModal}
      TransitionComponent={Transition}
      // keepMounted
      onClose={cancelar}
    >
      {title && (
        <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
      )}
      <DialogContent>
        {children(
          <DialogActions style={{ padding: "8px 0px" }}>
            <Button onClick={cancelar}>Cancelar</Button>
            <Button type="submit" color="primary" variant="contained">
              Gravar
            </Button>
          </DialogActions>
        )}
      </DialogContent>
    </Dialog>
  );
}
