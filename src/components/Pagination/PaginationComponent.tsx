import React, { useEffect, useState } from 'react'

import { useTheme } from '@hooks/useTheme'
import { PaginationProps } from './PaginationComponent.types'
import {
    Container,
    PaginationItem,
    ActionButton
} from './PaginationComponent.styles'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'

const PaginationComponent = ({
    count,
    onChange,
    defaultPage = 1
}: PaginationProps) => {
    const theme = useTheme()
    const [currentPage, setCurrentPage] = useState(defaultPage)
    const [pageList, setPageList] = useState([])

    useEffect(() => {
        for (let index = 1; index <= count; index++) {
            setPageList(prevState => [...prevState, index])
        }
    }, [count])

    useEffect(() => {
        onChange(currentPage)
    }, [currentPage])

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(prevState => prevState - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < count) {
            setCurrentPage(prevState => prevState + 1)
        }
    }

    return (
        <Container theme={theme}>
            <ActionButton theme={theme} onClick={handlePrev}>
                <BsArrowLeftShort />
            </ActionButton>
            {count <= 5 && (
                <>
                    {pageList.map((page, index) => (
                        <PaginationItem
                            theme={theme}
                            key={index}
                            isActive={page === currentPage}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </PaginationItem>
                    ))}
                </>
            )}
            {count > 5 && (
                <>
                    <PaginationItem
                        theme={theme}
                        isActive={pageList[0] === currentPage}
                        onClick={() => setCurrentPage(pageList[0])}
                    >
                        {pageList[0]}
                    </PaginationItem>
                    {currentPage >= 5 ? (
                        <>
                            <PaginationItem
                                theme={theme}
                                isActive={false}
                                disabled={true}
                            >
                                ...
                            </PaginationItem>
                            {currentPage <= count - 3 && (
                                <>
                                    <PaginationItem
                                        theme={theme}
                                        isActive={
                                            pageList[currentPage - 2] ===
                                            currentPage
                                        }
                                        onClick={() =>
                                            setCurrentPage(
                                                pageList[currentPage - 2]
                                            )
                                        }
                                    >
                                        {pageList[currentPage - 2]}
                                    </PaginationItem>
                                    <PaginationItem
                                        theme={theme}
                                        isActive={
                                            pageList[currentPage - 1] ===
                                            currentPage
                                        }
                                        onClick={() =>
                                            setCurrentPage(
                                                pageList[currentPage - 1]
                                            )
                                        }
                                    >
                                        {pageList[currentPage - 1]}
                                    </PaginationItem>
                                    <PaginationItem
                                        theme={theme}
                                        isActive={
                                            pageList[currentPage] ===
                                            currentPage
                                        }
                                        onClick={() =>
                                            setCurrentPage(
                                                pageList[currentPage]
                                            )
                                        }
                                    >
                                        {pageList[currentPage]}
                                    </PaginationItem>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            {pageList
                                .filter(element => element >= 2 && element <= 5)
                                .map((page, index) => (
                                    <PaginationItem
                                        theme={theme}
                                        key={index}
                                        isActive={page === currentPage}
                                        onClick={() => setCurrentPage(page)}
                                    >
                                        {page}
                                    </PaginationItem>
                                ))}
                        </>
                    )}
                    {currentPage <= count - 3 ? (
                        <>
                            <PaginationItem
                                theme={theme}
                                isActive={false}
                                disabled={true}
                            >
                                ...
                            </PaginationItem>

                            <PaginationItem
                                theme={theme}
                                isActive={pageList[count - 1] === currentPage}
                                onClick={() =>
                                    setCurrentPage(pageList[count - 1])
                                }
                            >
                                {pageList[count - 1]}
                            </PaginationItem>
                        </>
                    ) : (
                        <>
                            {pageList
                                .filter(element => element >= count - 4)
                                .map((page, index) => (
                                    <PaginationItem
                                        theme={theme}
                                        key={index}
                                        isActive={page === currentPage}
                                        onClick={() => setCurrentPage(page)}
                                    >
                                        {page}
                                    </PaginationItem>
                                ))}
                        </>
                    )}
                </>
            )}

            <ActionButton theme={theme} onClick={handleNext}>
                <BsArrowRightShort />
            </ActionButton>
        </Container>
    )
}

export default PaginationComponent
