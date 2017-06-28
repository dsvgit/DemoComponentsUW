import React from 'react';
import { View, Text, SectionList, StyleSheet, FlatList } from 'react-native';

export default props => {
  return (
    <View>
      <Text>Flat list</Text>
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'}
          ]}
          renderItem={({item}) => <Text key={item.key} style={styles.item}>{item.key}</Text>} />
      </View>
      <Text>Section list</Text>
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian']},
          ]}
          renderItem={({item}) => <Text key={item} style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text key={section.title} style={styles.sectionHeader}>{section.title}</Text>} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 0
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
