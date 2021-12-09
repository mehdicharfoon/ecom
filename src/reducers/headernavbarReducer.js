import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS,
    CHANGE_NAVBAR_ACTIVE
} from '../actions/types';

const INITIAL_STATE = {
    headerLinks: [],
    navbarLinks: []
    navbarLinks: [],
    onClick: ''
}

export default function(state = INITIAL_STATE, action) {
import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS,
    CHANGE_NAVBAR_ACTIVE
} from '../actions/types';
import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS,
    CHANGE_NAVBAR_ACTIVE
} from '../actions/types';
import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS,
    CHANGE_NAVBAR_ACTIVE
} from '../actions/types';
                headerLinks: action.payload
            }
        case SET_NAVBAR_LINKS:
        const { links, onClick } = action.payload; 
            return {
                ...state,
                navbarLinks: action.payload
                navbarLinks: links,
                onClick: onClick
            }
        case CHANGE_NAVBAR_ACTIVE: 
            const navbarLinks = state.navbarLinks.map(link => {
    switch (action.type) {
        case SET_HEADER_LINKS:
            return {
                ...state,
    switch (action.type) {
        case SET_HEADER_LINKS:
            return {
                ...state,
    switch (action.type) {
        case SET_HEADER_LINKS:
            return {
                ...state,