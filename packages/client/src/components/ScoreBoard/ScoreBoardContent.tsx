import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Player } from '../../global/playerInfoState';
import PlayerRow from './playerRow';

type Props = {
  players: Player[];
};

export default function ScoreBoardContent({ players }: Props) {
  return (
    <ScrollView style={styles.container}>
      {players.map((player) => (
        <PlayerRow player={player} key={player.id} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
});
