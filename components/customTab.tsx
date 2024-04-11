"use client";

import { ButtonDemo } from "@/components/Buttons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export const CustomTab = () => {
  return (
    <Tabs defaultValue="this-week" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
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
          <CardFooter></CardFooter>
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
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
