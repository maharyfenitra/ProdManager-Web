"use client";
import { Button } from "@chakra-ui/react";
import { CategoryType } from "@/lib/api";
import { Table } from "@chakra-ui/react";
import { CategorySearchForm } from "./components/CategorySearchForm";
import { Pagination } from "@/lib/components";
import { useDashboard } from "./hooks/useDashboard";
import { useRouter } from "next/navigation";
const Page = () => {
  const { data, handlePageChange, pageFromUrl } = useDashboard();
  const { push } = useRouter();

  return (
    <>
      <CategorySearchForm />
      {data?.content && (
        <Table.Root size="sm">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Description</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Action</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data?.content.map((category: CategoryType, index: number) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{category.name}</Table.Cell>
                  <Table.Cell>{category.description}</Table.Cell>
                  <Table.Cell textAlign="end">
                    <Button
                      onClick={() => push(`categories/details/${category.id}`)}
                    >
                      Détails
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      )}
      <Pagination
        currentPage={pageFromUrl}
        totalPages={data?.totalPages || 0}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Page;
