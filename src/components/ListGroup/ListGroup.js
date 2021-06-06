import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ItemGroup from '../ItemGroup/ItemGroup';
import styles from './styles';

const ListGroup = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.titleGroup}>Duyệt tìm tất cả</Text>
        </View>
        <View>
          <View style={styles.row}>
            <ItemGroup left color="#007bff" title="Pop" />
            <ItemGroup color="#343a40" title="Âu mỹ" />
            <ItemGroup left color="#17a2b8" title="Tâm trạng" />
            <ItemGroup color="#dc3545" title="Ngủ ngon" />
            <ItemGroup left color="#28a745" title="Tập trung" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ListGroup;
