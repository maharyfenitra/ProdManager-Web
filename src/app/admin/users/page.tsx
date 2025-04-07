"use client";

import { UserSearchForm } from "./components/UserSearchForm";
import { Table, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { UserType } from "@/lib/api";
import { useDashboard } from "./hooks/useDashboard";
import { Pagination } from "@/lib/components";

const Page = () => {
  const { data, handlePageChange, pageFromUrl } = useDashboard();
  const router = useRouter();
  console.log(data)
  return (
    <div>
      <UserSearchForm/>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>Nom complet</Table.ColumnHeader>
            <Table.ColumnHeader>Email</Table.ColumnHeader>
            <Table.ColumnHeader>Téléphone</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Actions</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.content && data.content.length > 0 ? (
            data.content.map((user: UserType) => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{`${user.firstName} ${user.lastName}`}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.phoneNumber}</Table.Cell>
                <Table.Cell>{user.description}</Table.Cell>
                <Table.Cell textAlign="end">
                  <Button
                    colorScheme="blue"
                    onClick={() => router.push(`users/${user.id}`)}
                    mr={2}
                  >
                    Voir
                  </Button>
                  <Button
                    colorScheme="green"
                    onClick={() => router.push(`users/${user.id}/edit`)}
                    mr={2}
                  >
                    Éditer
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() => console.log("Supprimer l'utilisateur")}
                    mr={2}
                  >
                    Supprimer
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={6} textAlign="center">
                Aucun utilisateur disponible.
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table.Root>
      <Pagination
        currentPage={pageFromUrl}
        totalPages={data?.totalPages || 0}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Page;

