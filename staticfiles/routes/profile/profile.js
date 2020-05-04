import React from 'react'
import styles from './profile.module.scss'
import AppLayout from '../../components/layout/app'
import Button from '../../components/button'
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import LeftProfile from '../../components/left-profile'
import ProfileBreadcrumb from '../../components/profileBreadcrumb'
import ProfileData from '../../components/profileData'

export default function Profile(props) {
  return (
    <AppLayout activeNav="Profile">
      <LeftProfile />
      <ProfileBreadcrumb />
      <ProfileData />
    </AppLayout>
  )
}
