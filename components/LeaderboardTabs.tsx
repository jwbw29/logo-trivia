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

import React from "react";

export const LeaderboardTabs = () => {
  return (
    <Tabs defaultValue="this-week" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 bg-muted">
        <TabsTrigger value="this-week">This Week</TabsTrigger>
        <TabsTrigger value="all-time">All Time</TabsTrigger>
      </TabsList>
      <TabsContent value="this-week">
        <Card>
          <CardHeader>
            <CardTitle>Leaders This Week</CardTitle>
            <div>Map the leaders</div>
            <div>Filtered by top x scores where currentWeek is defined</div>
            <div>username</div>
            <div>username</div>
            <div>username</div>
            <div>username</div>
            <div>username</div>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter>
            {/* //// Pagination */}
            <Pagination>
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
            </Pagination>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="all-time">
        <Card>
          <CardHeader>
            <CardTitle>All Time Leaders</CardTitle>
            <div>Map the leaders</div>
            <div>of all time</div>
            <div>username</div>
            <div>username</div>
            <div>username</div>
            <div>username</div>
            <div>username</div>
          </CardHeader>
          <CardContent className="space-y-2"></CardContent>
          <CardFooter>
            {" "}
            {/* //// Pagination */}
            <Pagination>
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
            </Pagination>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
