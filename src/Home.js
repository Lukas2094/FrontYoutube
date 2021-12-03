import React from "react";
import {makeStyles, 
  AppBar, 
  Toolbar, 
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  ListSubheader,
  Grid,
  Hidden , Switch} from '@material-ui/core'; // 75.5k (gzipped : 24.2k)
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Home({darkMode , setDarkMode}) {

    const useStyles= makeStyles((theme) => ({
        root: {
          height: '100vh',
          backgroundColor: theme.palette.background.dark, 
        }, 

        appBar: {
          boxShadow: 'none',
          zIndex: theme.zIndex.drawer + 1,
        },

        drawer: {
          width: 240,
          flexShrink: 0,
        },

        drawerPaper: {
          width: 240,
          borderRight: 'none',
        },

        logo: {
          height: '25px',

        },

        menuIcon: {
          paddingRight: theme.spacing(5),
          paddingLeft: theme.spacing(6),
        },
        

        icons : {
          paddingRight: theme.spacing(5),
        },

        grow: {
          flexGrow: 1,
        },

        listItemText: {
          fontSize: '14px',
        },

        listItem: {
          paddingTop: '4px',
          paddingBottom: '4px',
        },

        subheader: {
          color: '#606060',
          fontWeight: '600',
          textTransform: 'uppercase',
        },



    }));


    const videos =  [{
        id:1,
        title: 'FEED DO USÚARIO | Criando  com React.js e .Net Core #29',
        channel:'Lucas Nhimi',
        views:'124 mi de visualizações',
        date: 'há 1 semana',
        avatar:'/images/avatar.jpeg',
        thumb: '/images/thumb1.png',
    },

    {
        id:3,
        title: 'FEED DO USÚARIO | Criando uma Rede Social #29',
        channel:'Lucas Nhimi',
        views:'241 mi de visualizações',
        date: 'há 1 semana',
        avatar:'./images/avatar.jpeg',
        thumb: './images/thumb7.png',
  },

  {
        id:5,
        title: 'FEED DO USÚARIO | Criando uma Rede Social com React.js e .Net Core #29',
        channel:'Lucas Nhimi',
        views:'211 mi de visualizações',
        date: 'há 1 semana',
        avatar:'/images/avatar.jpeg',
        thumb: '/images/thumb3.png',
  },

  {
        id:4,
        title: 'FEED DO USÚARIO | Criando  com .Net Core #29',
        channel:'Lucas Nhimi',
        views:'11 mi de visualizações',
        date: 'há 1 semana',
        avatar:'/images/avatar.jpeg',
        thumb: '/images/thumb2.png',
  },

  {
    id:15,
    title: 'FEED DO USÚARIO | Criando uma Rede  React.js e .Net Core #29',
    channel:'Lucas Nhimi',
    views:'151 mi de visualizações',
    date: 'há 1 semana',
    avatar:'/images/avatar.jpeg',
    thumb: '/images/thumb2.png',
},

{
  id:11,
  title: 'FEED DO USÚARIO | Criando com React.js e .Net Core #29',
  channel:'Lucas Nhimi',
  views:'411 mi de visualizações',
  date: 'há 1 semana',
  avatar:'/images/avatar.jpeg',
  thumb: '/images/thumb1.png',
},

{
  id:2,
  title: 'FEED DO USÚARIO | Criando uma Rede Social com React.js #29',
  channel:'Lucas Nhimi',
  views:'112 mi de visualizações',
  date: 'há 1 semana',
  avatar:'/images/avatar.jpeg',
  thumb: '/images/thumb7.png',
},

{
  id:9,
  title: 'FEED DO USÚARIO | Criando uma Rede Social com React.js e .Net Core #29',
  channel:'Lucas Nhimi',
  views:'113 mi de visualizações',
  date: 'há 1 semana',
  avatar:'/images/avatar.jpeg',
  thumb: '/images/thumb2.png',
},
 ]
    const classes = useStyles();


  return (
      <div className={classes.root}>
          <AppBar color={'inherit'} className={classes.appBar}>
              <Toolbar>
                  <IconButton edge='start' className={classes.menuIcon} arial-aria-label='menu'>
                      <MenuIcon /> 
                  </IconButton>
                  <img src='/images/youtube-logo.png' alt='logo' className={classes.logo} />
                 <div className={classes.grow}> </div> 

                 <Switch value={darkMode} 
                 onChange={() => setDarkMode(!darkMode)}  className={classes.icons}/>

                 <IconButton  className={classes.icons}  >
                      <VideoCall /> 
                  </IconButton>
                  <IconButton className={classes.icons}  >
                      <Apps /> 
                  </IconButton>
                  <IconButton  className={classes.icons} >
                      <MoreVert /> 
                  </IconButton>
                  <Button startIcon={<AccountCircle />} variant="outlined" color="secondary">Fazer Login</Button>
              </Toolbar>
          </AppBar>
        <Box display='flex'>
          <Hidden mdDown>

          <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper:classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.draweContainer}>
          <List>
              <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon> 
                <ListItemText classes={{
                  primary:classes.listItemText
                }} primary={'Inicio'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<WhatshotIcon />}</ListItemIcon> 
                <ListItemText classes={{
                  primary:classes.listItemText
                }} primary={'Em Alta'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon> 
                <ListItemText classes={{
                  primary:classes.listItemText
                }} primary={'Inscrições'} />
              </ListItem>
          
          </List>
          <Divider />


          <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon> 
                <ListItemText classes={{
                  primary:classes.listItemText
                }} primary={'Biblioteca'} />
              </ListItem>
              <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<HistoryIcon />}</ListItemIcon> 
                <ListItemText classes={{
                  primary:classes.listItemText
                }} primary={'Histórico'} />
              </ListItem>
            <Divider />
            <Box p={3}>
                <Typography variant='body2'>
                  Faça login para curtir vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                  <Button variant='outlined' color='secondary' startIcon={<AccountCircle />}>
                    Fazer login
                  </Button>
                </Box>
            </Box>
            <Divider />
            <List component='nav' aria-labelledby='nested-list-subheader' 
            subheader={<ListSubheader component='div' id='nested=list-subheader' className={classes.subheader} >
              O Melhor do youtube
            </ListSubheader> 
            } >

            <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon> 
                <ListItemText classes={{
                  primary:classes.listItemText
                }} primary={'Música'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon> 
                <ListItemText classes={{
                  primary:classes.listItemText
                }} primary={'Esportes'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon> 
                <ListItemText classes={{
                  primary:classes.listItemText
                }} primary={'Jogos'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon> 
                <ListItemText classes={{
                  primary:classes.listItemText
                }} primary={'Filmes'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon> 
                <ListItemText classes={{
                  primary:classes.listItemText
                }} primary={'Notícias'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon> 
                <ListItemText classes={{
                  primary:classes.listItemText
                }} primary={'Ao vivo'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon> 
                <ListItemText classes={{
                  primary:classes.listItemText
                }} primary={'Destaques'} />
              </ListItem>

              <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon> 
                <ListItemText classes={{
                  primary:classes.listItemText
                }} primary={'Vídeos 360'} />
              </ListItem>
            </List>
            <Divider />

            <ListItem button classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon> 
                <ListItemText classes={{
                  primary:classes.listItemText
                }} primary={'Procurar mais'} />
              </ListItem>
            
             </div>
           </Drawer>
          </Hidden>
          

      <Box p={6}> 
      <Toolbar />
         <Typography variant='h5' color='textPrimary' style={{fontWeight:800 ,}}>
           Recomendados
         </Typography>

         <Grid container spacing={2}>
            
            {
              videos.map((item, index) => (
                <Grid item lg={3} md={4} xs={12}> 
                   <Box>
                      <img style={{width: '100%'}} alt={item.title} src={item.thumb} />
                      <Box>
                        <Typography style={{fontWeight: 600}} gutterBottom variant='body1' color='textPrimary'>
                          {item.title}
                        </Typography>


                        <Typography display='block' variant='body2' color='textSecondary'>
                          {item.channel}
                        </Typography>

                        <Typography display='block' variant='body2' color='textSecondary'>
                          {`${item.views} * ${item.date}`}
                        </Typography>
                      </Box>
                   </Box>
                
                </Grid>
              ))
            }

         </Grid>
      </Box>
    </Box>

      </div>
    )
  }  

  export default Home;