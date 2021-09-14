import React from 'react';
import { ActiveDivider, Container, Divider, Genre, GenresWrapper } from './styles';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

class GenreToggle extends React.Component {
  state = {
    activeGenre: genres[0]
  };

  handleClickGenre = genre => () => this.setState({ activeGenre: genre });

  render() {
    return (
      <Container>
        <GenresWrapper>
          {genres.map(item => (
            <Genre key={item} onClick={this.handleClickGenre(item)}>
              {item}
              {item === this.state.activeGenre && (
                <ActiveDivider/>
              )}
            </Genre>
          ))}
        </GenresWrapper>
        <Divider/>
      </Container>
    );
  }
}

export default GenreToggle;
