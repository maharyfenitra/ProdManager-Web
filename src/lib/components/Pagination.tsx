"use client";

import { Button, HStack, Text } from "@chakra-ui/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function getVisiblePages(current: number, total: number) {
  const pages: (number | string)[] = [];

  if (total <= 7) {
    for (let i = 0; i < total; i++) pages.push(i);
  } else {
    pages.push(0);

    if (current > 3) pages.push("...");

    for (let i = current - 1; i <= current + 1; i++) {
      if (i > 0 && i < total - 1) pages.push(i);
    }

    if (current < total - 4) pages.push("...");

    pages.push(total - 1);
  }

  return pages;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <HStack gap={1} mt={4} justifyContent="center" wrap="wrap">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
        size="sm"
      >
        Précédent
      </Button>

      {visiblePages.map((page, index) =>
        page === "..." ? (
          <Text key={index} px={2}>
            ...
          </Text>
        ) : (
          <Button
            key={page}
            onClick={() => onPageChange(page as number)}
            variant={page === currentPage ? "solid" : "outline"}
            colorScheme="blue"
            size="sm"
          >
            {(page as number) + 1}
          </Button>
        )
      )}

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        size="sm"
      >
        Suivant
      </Button>
    </HStack>
  );
};
