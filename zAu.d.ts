/* zAu.d.ts

	Purpose:
		Type definitions for ZK 9.0.0
	Description:

	History:
		Mon Apr 01 14:39:27 CST 2019, Created by rudyhuang

Copyright (C) 2019 Potix Corporation. All Rights Reserved.

This program is distributed under LGPL Version 2.1 in the hope that
it will be useful, but WITHOUT ANY WARRANTY.
*/
declare namespace zk {
    interface EventOptions {
        implicit: boolean;
        ignorable: boolean;
        toServer: boolean;
        uri: string;
        rtags: {[key: string]: any};
    }

    interface EventStopOptions {
        revoke: boolean;
        propagation: boolean;
        dom: boolean;
        au: boolean;
    }

    interface Event {
        auStopped: boolean;
        currentTarget: Widget;
        data: any;
        domEvent: JQueryEventObject;
        domStopped: boolean;
        domTarget: HTMLElement;
        name: string;
        opts: EventOptions;
        stopped: boolean;
        target: Widget;
        [dataKey: string]: any; // If data is an instance of Map, its content is copied to the event instance.

        addOptions(opts: Partial<EventOptions>): void;
        stop(opts?: Partial<EventStopOptions>): void;
    }

    interface AUEngine {
        ajaxSettings: JQueryAjaxSettings;
        cmd0: any;
        cmd1: any;

        addAuRequest(dt: any, aureq: Event): void;
        ajaxErrorHandler(req: XMLHttpRequest, status: number, statusText: string, ajaxReqTries?: number): void;
        beforeSend(uri: string, aureq: Event): string;
        confirmRetry(msgCode: string, msg2?: string): boolean;
        createWidgets(codes: any[], fn: (wgts: Widget[]) => void, filter: (wgt: Widget) => Widget | null): void;
        doCmds(dtid: string, rs: any[]): void;
        encode(j: number, aureq: Event, dt: any): string;
        getAuRequests(dt: any): any[]
        getErrorURI(code: number): string;
        getPushErrorURI(code: number): string;
        onError(fn: (req: XMLHttpRequest, errCode: number) => boolean): void;
        process(cmd: string, data: string): void;
        processing(): boolean;
        send(aureq: Event, timeout?: number): void;
        sendAhead(aureq: Event, timeout?: number): void;
        sendNow(dt: any): boolean;
        setErrorURI(code: number, uri: string): void;
        setErrorURI(errors: {[code: number]: string}): void;
        setPushErrorURI(code: number, uri: string): void;
        setPushErrorURI(errors: {[code: number]: string}): void;
        shallIgnoreESC(): boolean;
        showError(msgCode: string, msg2?: string, cmd?: string, ex?: Error): void;
        unError(fn: (req: XMLHttpRequest, errCode: number) => boolean): void;
    }
}

declare var zAu: zk.AUEngine;
