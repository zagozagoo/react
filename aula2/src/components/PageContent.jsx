import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
    p: 0,
    width: '100%',
    maxWidth: 360,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
  };

export default function PageContent(){
    return (
      <div className="pagecontent">
        <h1>Bom dia</h1>
        <h3>Lista de compras:</h3>

        <br/>   

        <List sx={style} aria-label="mailbox folders">
          <ListItem>
            <ListItemText primary="Pacote de amoras" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Pão de forma" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Toddy" />
          </ListItem>
          <Divider component="li" />
          <ListItem>
            <ListItemText primary="Escovas de dente" />
          </ListItem>
        </List>
      </div>
    )
  }