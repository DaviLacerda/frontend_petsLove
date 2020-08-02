import React, { useContext, useEffect, useCallback, useState } from 'react'
import { observer } from 'mobx-react'
import UserContext from 'Context/UserContext'
import { useTranslation } from 'react-i18next'
import ListPets from 'components/ListPets'
import Title from 'components/commons/Title'
import PaginationList from 'components/commons/PaginationList'

const ForAdoption = ({ id }) => {
  const [page, setPage] = useState(1)
  const [limit] = useState(5)
  const { t } = useTranslation('dashboard')
  const rootStore = useContext(UserContext)
  const { searchPetsStore } = rootStore

  useEffect(() => {
    searchPetsStore.getPetsForAdoption(id, 5, page)
  }, [])

  const handleChangePage = useCallback((e, newPage) => {
    searchPetsStore.getPetsForAdoption(id, 5, newPage)
    setPage(newPage)
  }, [])

  return (
    <>
      <Title mTop="50px" mBottom="30px" title={t('protectionistUser.needHome')} />
      <ListPets isLoading={searchPetsStore.isLoading} pets={searchPetsStore.petsForAdoption} />
      {searchPetsStore.totalPetsForAdoption !== 0 && (
        <PaginationList
          page={page}
          limit={limit}
          handleChange={handleChangePage}
          total={searchPetsStore.totalPetsForAdoption}
        />
      )}
    </>
  )
}

export default observer(ForAdoption)
