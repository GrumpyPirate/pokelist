import React from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';

import Layout from '../components/Layout/Layout';
import PokemonList from '../components/PokemonList/PokemonList';
import SEO from '../components/SEO/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      <Row>
        <Col>
          <h1>PokéList</h1>
        </Col>
      </Row>
      <PokemonList />
    </Grid>
  </Layout>
);

export default IndexPage;
