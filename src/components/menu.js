import React, { Component } from 'react';
const styles = {

    SideNav: {
      height: "100vh",
      width: "20%",
      backgroundColor: "#34495e",
      margin: 0,
      padding: 0,
    },

    item: {
      color: "#000",
      fontSize: 28,
      fontWeight: "bold",
      
      cursor: "pointer",

      paddingLeft: "12%",
      paddingTop: "10%",

    } 

  };

export default class Menu extends Component {

  render() {
    return (
      <div style={styles.SideNav}>
        <div style={styles.item}>
            Customers
        </div>
        <div style={styles.item}>
            Vendors
        </div>
        <div style={styles.item}>
            Inventory
        </div>
        <div style={styles.item}>
            Employees
        </div>
        <div style={styles.item}>
            General
        </div>
        <div style={styles.item}>
            Accounting
        </div>
        <div style={styles.item}>
            Reports
        </div>
      </div>
    );
  }
}


