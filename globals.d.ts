/* globals.d.ts

	Purpose:
		Type definitions for ZK 9.0.0
	Description:

	History:
		Mon Apr 01 14:39:27 CST 2019, Created by rudyhuang

Copyright (C) 2019 Potix Corporation. All Rights Reserved.

This program is distributed under LGPL Version 2.1 in the hope that
it will be useful, but WITHOUT ANY WARRANTY.
*/
interface String {
    $camel(): string;
    $inc(diff: number): string;
    $sub(cc: string): number;
    startsWith(search: string, position?: number): boolean;
    endsWith(search: string, position?: number): boolean;
}

interface Array<T> {
    $indexOf(o: T): number;
    $contains(o: T): boolean;
    $equals(o: any): boolean;
    $remove(o: T): boolean;
    $addAll(o: T[]): number;
    $clone(): T[];
}
