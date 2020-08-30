import React from "react";

import {
  Dialog,
  makeStyles,
  Slide,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

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
      {title ? (
        fullScreen ? (
          <AppBar
            style={{
              position: "relative",
              height: 50,
              justifyContent: "center",
            }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={cancelar}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
        ) : (
          <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
        )
      ) : null}

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
