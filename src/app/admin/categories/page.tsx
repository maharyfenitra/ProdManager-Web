"use client";
import { Button } from "@chakra-ui/react";
import { useGetAllCategories, CategoryType } from "@/lib/api";
import { Table } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { CategorySearchForm } from "./components/CategorySearchForm";
const Page = () => {
  const { data } = useGetAllCategories();
  const { push } = useRouter();

  return (
    <>
      <CategorySearchForm/>
      {data && (
        <Table.Root size="sm">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Description</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Action</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((category: CategoryType, index: number) => {
              
              return (
                <Table.Row key={index}>
                  <Table.Cell>{category.name}</Table.Cell>
                  <Table.Cell>{category.description}</Table.Cell>
                  <Table.Cell textAlign="end">
                    <Button onClick={() => push(`categories/details/${category.id}`)}>Détails</Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table.Root>
      )}
    </>
  );
};

export default Page;
