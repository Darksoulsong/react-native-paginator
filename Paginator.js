/**
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PagButton from './PagButton';
import {
  getItems,
  getDisplayItems,
  getConditions,
  getButtonStyles,
} from './utils';
import styles from './styles';

type Props = {
  totalItems: number,
  buttonActiveStyles: {[x: string]: string},
  buttonStyles: {[x: string]: string},
  buttonControlStyles: {[x: string]: string},
  buttonAltStyles: {[x: string]: string},
  disabled: boolean,
  showControls?: boolean,
  activePage?: number,
  itemsPerPage?: number,
  pageRangeDisplayed?: number,
  onChange: (pageNumber: number) => void,
}

type State = {
  activePage: number,
  totalItems: number,
};

class Paginator extends Component<Props, State> {
  static defaultProps = {
    showControls: false,
    activePage: 1,
    itemsPerPage: 10,
    pageRangeDisplayed: 3,
  }

  constructor(props) {
    super(props);

    this.init();
  }

  goToPage = (pageNumber: number) => {
    if (this.state.activePage === pageNumber) {
      return;
    }

    this.setState(previousState => ({
      ...previousState,
      activePage: pageNumber,
    }));

    this.props.onChange(pageNumber);
  }

  goPrevious = (activePage: number) => this.goToPage(activePage - 1)

  goNext = (activePage: number) => this.goToPage(activePage + 1)

  componentWillReceiveProps(nextProps: Props) {
    const { totalItems } = nextProps;
    const shouldUpdate = totalItems !== this.state.totalItems;

    if (!shouldUpdate) {
      return;
    }

    this.items = getItems(totalItems, nextProps.itemsPerPage);

    this.setState(previousState => ({
      ...previousState,
      totalItems,
    }));
  }

  init() {
    const {
      pageRangeDisplayed,
      totalItems,
      activePage,
      itemsPerPage,
    } = this.props;

    this.items = getItems(totalItems, itemsPerPage);
    this.displayItems = getDisplayItems(this.items, activePage, pageRangeDisplayed);

    this.state = {
      activePage,
      totalItems: 0,
    };
  }

  render() {
    const {
      showControls,
      disabled,
      pageRangeDisplayed,
      totalItems,
      itemsPerPage,
    } = this.props;

    const { activePage } = this.state;
    const totalPages = this.items.length;
    const shouldShowPaginator = totalItems > itemsPerPage;

    const {
      nextStepIsOutOfRange,
      previousStepIsOutOfRange,
    } = getConditions(activePage, totalItems);

    const {
      buttonActiveStyle,
      buttonAltStyle,
      buttonStyle,
      goNextButtonStyle,
      goPreviousButtonStyle,
    } = getButtonStyles(previousStepIsOutOfRange, nextStepIsOutOfRange, styles, this.props);

    const buttonActiveColor = buttonActiveStyle.color;

    this.displayItems = getDisplayItems(
      this.items,
      activePage,
      pageRangeDisplayed,
    );

    return shouldShowPaginator && (
      <View style={styles.main}>
        {showControls && (
          <PagButton
            disabled={previousStepIsOutOfRange || disabled}
            onPress={() => this.goPrevious(activePage)}
            styles={goPreviousButtonStyle}
          >
            <Text
              style={
                previousStepIsOutOfRange
                  ? { color: styles.item.borderColor }
                  : {}
              }
            >
              &laquo;
            </Text>
          </PagButton>
        )}

        <PagButton
          onPress={() => this.goToPage(1)}
          disabled={disabled}
          styles={
            activePage === 1
              ? buttonActiveStyle
              : buttonStyle
          }
        >
          <Text
            style={
              activePage === 1
                ? { color: buttonActiveColor }
                : {}
            }
          >
            1
          </Text>
        </PagButton>

        {activePage > 3 && (
          <PagButton>
            <Text style={buttonAltStyle}>&hellip;</Text>
          </PagButton>
        )}

        {this.displayItems.map(item => (
          <PagButton
            key={`${item}`}
            onPress={() => this.goToPage(item)}
            disabled={disabled}
            styles={
              activePage === item
                ? buttonActiveStyle
                : buttonStyle
            }
          >
            <Text
              style={
                activePage === item
                  ? { color: buttonActiveColor }
                  : {}
              }
            >
              {item}
            </Text>
          </PagButton>
        ))}

        {activePage < totalPages - 1 && (
          <PagButton>
            <Text style={buttonAltStyle}>&hellip;</Text>
          </PagButton>
        )}

        <PagButton
          onPress={() => this.goToPage(totalPages)}
          disabled={disabled}
          styles={
            activePage === totalPages
              ? buttonActiveStyle
              : buttonStyle
          }
        >
          <Text
            style={
              activePage === totalPages
                ? { color: buttonActiveColor }
                : {}
            }
          >
            {totalPages}
          </Text>
        </PagButton>

        {showControls && (
          <PagButton
            onPress={() => this.goNext(activePage)}
            disabled={nextStepIsOutOfRange || disabled}
            styles={goNextButtonStyle}
          >
            <Text
              style={
                nextStepIsOutOfRange
                  ? { color: styles.item.borderColor }
                  : {}
              }
            >
              &raquo;
            </Text>
          </PagButton>
        )}
      </View>
    );
  }
}

export default Paginator;
