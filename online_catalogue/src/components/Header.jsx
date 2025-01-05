import React from 'react';
import { AppBar, Toolbar, Grid, MenuItem, Fade, Menu } from '@mui/material';
import Box from '@material-ui/core/Box';
import { MenuButton, CustomLink, ThemeSwitch } from './theme.js';

//menu list
function FadeMenu(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {

		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleBrowseClickInsideFadeMenu = (value) => {
		props.onBrowseClick(value); // Call the onBrowseClick function from the parent component
		setAnchorEl(null);
	};


	return (
		<div>
			<MenuButton
				id="fade-button"
				aria-controls="fade-menu"
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				sx={{ m: 1.5 }}
				selected={props.browse}
				color='secondary'
			>
				Browse
			</MenuButton>
			<Menu
				id="fade-menu"
				MenuListProps={{
					'aria-labelledby': 'fade-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
				color='secondary'
			>
				<MenuItem onClick={() => handleBrowseClickInsideFadeMenu(true)}><CustomLink to='/Datasets'>Datasets</CustomLink></MenuItem>
				<MenuItem onClick={() => handleBrowseClickInsideFadeMenu(true)}><CustomLink to='/Experiments' >Experiments</CustomLink></MenuItem>
				<MenuItem onClick={() => handleBrowseClickInsideFadeMenu(true)}><CustomLink to='/Methods'>Methods</CustomLink></MenuItem>
				<MenuItem onClick={() => handleBrowseClickInsideFadeMenu(true)}><CustomLink to='/Metafeatures'>Metafeatures</CustomLink></MenuItem>
			</Menu>
		</div>
	);
}

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			analyse: false,
			browse: false,
			home: true,
		}
	}

	handleLinkClick = (linkName) => {

		// Reset all link states to false
		this.setState({
			home: false,
			browse: false,
			analyse: false
		});

		// Set the state for the clicked link to true
		this.setState({ [linkName]: true });
	};

	handleBrowseClick = (value) => {
		// Update the browse state when the FadeMenu is clicked
		this.setState({
			browse: value,
			home: false,
			analyse: false
		});
	};

	componentDidUpdate(){
		console.log("componennt updated", this.props.selectedLinkFromLanding)
	}

	componentDidMount() {
		// Add event listener for the hashchange event
		window.addEventListener('hashchange', this.handleHashChange);

		// Check the initial hash value and update the state accordingly
		this.handleHashChange();
	}


	componentWillUnmount() {
		// Remove the event listener when the component unmounts
		window.removeEventListener('hashchange', this.handleHashChange);
	}

	handleHashChange = () => {
		// Check the current hash value and update the state accordingly
		// const hashValue = window.location.hash;
		console.log('change occured')
		console.log('hashValue')
		const hash = window.location.hash;
		const segments = hash.split('/');
		const lastSegment = segments[segments.length - 1];

		switch (lastSegment) {
			case '':
				this.handleLinkClick('home');
				break;
			case 'Analyse':
				this.handleLinkClick('analyse');
				break;
			default:
				this.handleLinkClick('browse');
				break;
		}
	};

	showThemeSwitch = () => {
		const hash = window.location.hash;
		const segments = hash.split('/');
		const lastSegment = segments[segments.length - 1];

		switch (lastSegment) {
			case '':
				return false
			case 'Analyse':
				return true
			default:
				return true
		}
	}

	handleThemeChange = () => {
		this.props.onToggleDarkMode();
	};

	render() {
		const { darkMode } = this.props;
		return (
			<React.Fragment>
				<AppBar position="fixed" sx={{ bgcolor: theme => theme.palette.primary.light }}>
					<Toolbar>
						<Grid container justifyContent="flex-start">
							<MenuButton><CustomLink to="/" selected={this.state.home} onClick={() => this.handleLinkClick('home')}>Home</CustomLink> </MenuButton>
							<FadeMenu browse={this.state.browse} onBrowseClick={this.handleBrowseClick} />
							<MenuButton><CustomLink to="/Analyse" selected={this.state.analyse} onClick={() => this.handleLinkClick('analyse')}>Analyse</CustomLink> </MenuButton>
						</Grid>
						{this.showThemeSwitch() &&
							<Box display='flex' flexGrow={1} alignItems={'center'}>
								<ThemeSwitch sx={{ m: 1 }}
									checked={darkMode} onChange={this.handleThemeChange}
								/>

							</Box>
						}

					</Toolbar>
				</AppBar>
			</React.Fragment>


		)
	}
}

export default Header;