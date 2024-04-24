"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// [ ] I think this is where I wanna fetch the leaderboard data

import React from "react";

export const Leaderboard = () => {
  return (
    <Tabs defaultValue="all-time" className="w-full" aria-label="leaderboard">
      <TabsList className="grid grid-cols-2 bg-muted">
        <TabsTrigger value="all-time" className=" col-span-2 ">
          Leaderboard
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all-time">
        <Card>
          <CardHeader>
            <CardTitle>All Time Leaders</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <p>username</p>
              <p>score</p>{" "}
              {/*[ ] this should be most correct, not percentage */}
            </div>
          </CardContent>
          <CardFooter>
            {" "}
            {/* //// Pagination */}
            {/* [ ] Build some logic that only shows pagination if number of displayed users meets the threshold */}
            {/* <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination> */}
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
