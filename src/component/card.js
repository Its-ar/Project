import React from 'react';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const card = ({projectData, onPressCancel, onPressOk}) => (
  <Card>
    <Card.Title
      title={projectData.nomorKontrak}
      subtitle={projectData.namaPaket}
      left={LeftContent}
    />
    <Card.Content>
      <Title>{projectData.judul}</Title>
      <Paragraph>{projectData.konten}</Paragraph>
    </Card.Content>
    <Card.Cover source={{uri: projectData.gambar}} />
    <Card.Actions>
      <Button onPress={onPressCancel}>Cancel</Button>
      <Button onPress={onPressOk}>Ok</Button>
    </Card.Actions>
  </Card>
);

export default card;
