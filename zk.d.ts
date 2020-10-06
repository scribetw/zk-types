/* zk.d.ts

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
    type Class = any;
    type Desktop = any; // TODO

    interface ObjectStatic {
        isAssignableFrom(cls: Class): boolean;
        isInstance(o: any): boolean;
    }

    interface Object {
        $class: Class;
        $oid: number;

        $init(): void;
        $instanceof(klass: Class): boolean;
        $super(klass: Class, mtd: string, ...vararg: any[]): any;
        $super(mtd: string, ...vararg: any[]): any;
        $supers(klass: Class, mtd: string, args: ArrayLike<any>): any;
        $supers(mtd: string, args: ArrayLike<any>): any;
        afterInit(func: () => void): void;
        // ref: https://github.com/Microsoft/TypeScript/pull/27028
        proxy<A extends any[], R>(func: (...args: A) => R): (...args: A) => R;
        proxy<A0, A extends any[], R>(func: (arg0: A0, ...args: A) => R): (arg0: A0, ...args: A) => R;
        proxy<A0, A1, A extends any[], R>(func: (arg0: A0, arg1: A1, ...args: A) => R): (arg0: A0, arg1: A1, ...args: A) => R;
        proxy<A0, A1, A2, A extends any[], R>(func: (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R): (arg0: A0, arg1: A1, arg2: A2, ...args: A) => R;
        proxy<A0, A1, A2, A3, A extends any[], R>(func: (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R): (arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R;
        proxy<AX, R>(func: (...args: AX[]) => R): (...args: AX[]) => R;
    }

    interface Skipper extends Object {
        restore(wgt: Widget, inf: any): void;
        skip(wgt: Widget, skipId?: string): HTMLElement;
        skipped(wgt: Widget, child: Widget): boolean;
    }

    interface Widget extends Object {
        $weave: any;
        autag: string;
        readonly bindLevel: number;
        className: string;
        readonly desktop: Desktop;
        effects_: any;
        readonly firstChild: Widget | null;
        readonly id: string;
        insertingBefore_: boolean;
        readonly inServer: boolean;
        readonly lastChild: Widget | null;
        readonly nChildren: number;
        readonly nextSibling: Widget | null;
        readonly parent: Widget | null;
        readonly previousSibling: Widget | null;
        uuid: string;
        widgetName: string;

        $f(): {[id: string]: Widget};
        $f(id: string, global?: boolean): Widget;
        $init(props?: {[prop: string]: any}): void;
        $n(): HTMLElement;
        $n(subId: string): HTMLElement;
        $o(): Widget;
        $s(): string;
        $s(subId: string): string;
        $service(): any;
        afterAnima_(visible: boolean): void;
        afterParentChanged_(oldparent: Widget): void;
        appendChild(child: Widget, ignoreDom?: boolean): boolean;
        beforeParentChanged_(newparent: Widget): void;
        beforeSendAU_(wgt: Widget, evt: Event): void;
        bind_(dt?: Desktop, skipper?: Skipper, after?: any[]): void;
        bind(dt?: Desktop, skipper?: Skipper): void;
        bindChildren_(dt?: Desktop, skipper?: Skipper, after?: any[]): void;
        bindDoubleTap_(): void;
        bindSwipe_(): void;
        bindTapHold_(): void;
        canActivate(opts?: {checkOnly?: boolean}): boolean;
        cleanDrag_(): void;
        clear(): void;
        clearCache(): void;
        cloneDrag_(drag: any, ofs: Offset): HTMLElement;
        deferRedraw_(out: string[]): void;
        deferRedrawHTML_(out: string[]): void;
        detach(): void;
        doBlur_(evt: Event): void;
        doClick_(evt: Event): void;
        doDoubleClick_(evt: Event): void;
        doFocus_(evt: Event): void;
        doKeyDown_(evt: Event): void;
        doKeyPress_(evt: Event): void;
        doKeyUp_(evt: Event): void;
        domAttrs_(no?: {[noAttr: string]: boolean}): string;
        domClass_(no?: {[noAttr: string]: boolean}): string;
        domListen_(node: Element, evtnm: string, fn?: any, keyword?: string): Widget;
        doMouseDown_(evt: Event): void;
        doMouseMove_(evt: Event): void;
        doMouseOut_(evt: Event): void;
        doMouseOver_(evt: Event): void;
        doMouseUp_(evt: Event): void;
        domStyle_(no?: {[noAttr: string]: boolean}): string;
        domTextStyleAttr_(): string;
        domTooltiptext_(): string;
        domUnlisten_(node: Element, evtnm: string, fn?: any, keyword?: string): Widget;
        doPaste_(evt: Event): void;
        doResizeScroll_(): void;
        doRightClick_(evt: Event): void;
        doSelect_(evt: Event): void;
        doSwipe_(evt: Event): void;
        doTooltipOut_(): void;
        doTooltipOver_(): void;
        dropEffect_(over: boolean): void;
        extraBind_(uuid: string, add: boolean): void;
        fire(evtnm: string, data: any, opts?: any, timeout?: number): Event;
        fireX(evt: Event, timeout?: number): void;
        focus_(timeout: number): boolean;
        focus(timeout?: number): boolean;
        forcerender(): void;
        fromPageCoord(x: number, y: number): Offset;
        get(name: string): any;
        getAction(): string;
        getCaveNode(): HTMLElement;
        getChildAt(j: number): Widget;
        getChildIndex(): number;
        getClass(wgtnm: string): any;
        getDraggable(): string;
        getDragMessage_(): string;
        getDragNode(): HTMLElement;
        getDragOptions_(map: any): any; // TODO
        getDrop_(dragged: Widget): Widget;
        getDroppable(): string;
        getFirstNode_(): HTMLElement;
        getFloatZIndex_(node: Element): number;
        getHeight(): string;
        getHflex(): string;
        getId(): string;
        getLeft(): string;
        getMold(): string;
        getOldWidget_(n: Element): Widget;
        getPage(): any;
        getRenderdefer(): number;
        getSclass(): string;
        getScrollLeft(): number;
        getScrollTop(): number;
        getStyle(): string;
        getTabindex(): number;
        getTextNode(): HTMLElement;
        getTooltiptext(): string;
        getTop(): string;
        getTopWidget(): Widget | null;
        getVflex(): string;
        getWidth(): string;
        getZclass(): string;
        getZIndex(): number;
        hide(): Widget;
        ignoreDescendantFloatUp_(): boolean;
        ignoreDrag_(pt: any): boolean;
        initDrag_(): void;
        insertBefore(child: Widget, sibling: Widget): boolean;
        insertChildHTML_(child: Widget, before: Widget, desktop: Desktop): void;
        isBinding(): boolean;
        isFloating_(): boolean;
        isListen(evtnm: string, opts?: {any?: boolean; asapOnly?: boolean}): boolean;
        isRealElement(): boolean;
        isRealVisible(opts?: {dom?: boolean; until?: Widget; strict?: boolean; cache?: any}): boolean;
        isVisible(strict?: boolean): boolean;
        isWatchable_(name: string, p: Widget, cache: any): boolean;
        listen(infos: {[event: string]: any}, priority?: number): Widget;
        listenOnFitSize_(): void;
        onAfterSize(): void;
        onChildAdded_(child: Widget): void;
        onChildRemoved_(child: Widget): void;
        onChildRenderDefer_(child: Widget): void;
        onChildReplaced_(oldc: Widget, newc: Widget): void;
        onChildVisible_(child: Widget): void;
        onDrop_(drag: any, evt: Event): void;
        redraw(out: string[]): void;
        redrawHTML_(skipper?: Skipper, trim?: boolean): string;
        removeChild(child: Widget, ignoreDom?: boolean): boolean;
        removeChildHTML_(child: Widget, ignoreDom?: boolean): void;
        removeHTML_(n: any[]): void;
        replaceCavedChildren_(subId: string, wgts: Widget[], tagBeg: string, tagEnd: string): void;
        replaceChildHTML_(child: Widget, n: Element, dt: Desktop, skipper: Skipper): void;
        replaceHTML(n: Element, desktop: Desktop, skipper: Skipper): Widget;
        replaceWidget(newwgt: Widget): void;
        rerender(timeout?: number): Widget;
        rerender(skipper?: Skipper): Widget;
        rerenderLater_(): Widget;
        rerenderNow_(skipper?: Skipper): void;
        scrollIntoView(): Widget;
        sendAU_(evt: Event, timeout: number): void;
        set(name: string, value: any, extra?: any): Widget;
        setAction(action: string): void;
        setChildren(children: Widget[]): Widget;
        setDomVisible_(n: Element, visible: boolean, opts?: {display?: boolean; visibility?: boolean}): void;
        setDraggable(draggable: string): Widget;
        setDroppable(droppable: string): Widget;
        setFloating_(floating: boolean, opts?: {node?: Element}): Widget;
        setFloatZIndex_(node: Element, zi: number): void;
        setHeight(height: string): Widget;
        setHflex(flex: string): void;
        setId(id: string): Widget;
        setLeft(left: string): Widget;
        setListener(inf: [string, ((evt: Event) => void) | string | null]): void;
        setListener(evt: string, fn: ((evt: Event) => void) | string | null): void;
        setListeners(infos: {[event: string]: ((evt: Event) => void) | string | null}): void;
        setMold(mold: string): Widget;
        setRenderdefer(ms: number): void;
        setSclass(sclass: string): Widget;
        setScrollLeft(left: number): Widget;
        setScrollTop(top: number): Widget;
        setStyle(style: string): Widget;
        setTabindex(tabindex: number): void;
        setTooltiptext(title: string): Widget;
        setTop(top: string): Widget;
        setTopmost(): number;
        setVflex(flex: string): void;
        setVisible(visible: boolean): Widget;
        setWidth(widsth: string): Widget;
        setZclass(zclass: string): Widget;
        setZIndex(zIndex: number, opts?: {}): Widget;
        shallChildROD_(): boolean;
        shallFireSizedLaterWhenAddChd_(): boolean;
        shallIgnoreClick_(evt: Event): boolean;
        show(): Widget;
        smartUpdate(name: string, value: any, timeout?: number): Widget;
        unbind_(skipper?: Skipper, after?: any[], keepRod?: boolean): void;
        unbind(dt?: Desktop, skipper?: Skipper, keepRod?: boolean): Widget;
        unbindChildren_(skipper?: Skipper, after?: any[], keepRod?: boolean): void;
        unbindDoubleTap_(): void;
        unbindSwipe_(): void;
        unbindTapHold_(): void;
        uncloneDrag_(drag: any): void;
        unlisten(infos: {[event: string]: any}): Widget;
        unlistenOnFitSize_(): void;
        updateDomClass_(): void;
        updateDomStyle_(): void;
        zsync(opts?: {}): void;

        [key: string]: any;
    }

    interface WidgetStatic extends ObjectStatic {
        auDelay: number;

        $(n: any, opts?: any): Widget;
        getClass(wgtnm: string): any;
        getElementsById(id: string): any[];
        getElementsByName(name: string): any[];
        /** @deprecated */ isAutoId(uuid: string): boolean;
        mimicMouseDown_(wgt: Widget, noFocusChange: boolean, which: number): void;
        newInstance(wgtnm: string, props: any): Widget;
        nextUuid(): string;
        register(clsnm: string, blankPreserved: boolean): void;
        uuid(subId: string): string;
    }

    interface ZKCoreUtilityStatic {
        readonly agent: string;
        readonly air: boolean;
        readonly alerting: boolean;
        readonly android: boolean;
        appName: string;
        Buffer: Buffer;
        readonly booted: boolean;
        readonly build: string;
        readonly busy: number;
        readonly chrome: boolean;
        readonly classes: {[id: number]: any};
        readonly clickPointer: Offset;
        readonly css3: boolean;
        currentFocus: Widget | undefined;
        currentModal: any;
        readonly currentPointer: Offset;
        DECIMAL: string;
        readonly edge: number | false;
        readonly ff: number | false;
        focusBackFix: boolean;
        readonly gecko: number | undefined;
        GROUPING: string;
        readonly ie: number | undefined;
        readonly ie6: boolean | undefined;
        readonly ie6_: boolean | undefined;
        readonly ie7: boolean | undefined;
        readonly ie7_: boolean | undefined;
        readonly ie8: boolean | undefined;
        readonly ie8_: boolean | undefined;
        readonly ie8c: boolean | undefined;
        readonly ie9: boolean | undefined;
        readonly ie9_: boolean | undefined;
        readonly ie10: boolean | undefined;
        readonly ie10_: boolean | undefined;
        readonly ie11: boolean | undefined;
        readonly ie11_: boolean | undefined;
        readonly iex: number | undefined;
        readonly ios: string | false;
        readonly ipad: string | false;
        keyCapture: Widget | undefined;
        readonly linux: boolean;
        readonly loading: number;
        MINUS: string;
        readonly mac: boolean;
        readonly mobile: string | false;
        readonly mounting: boolean;
        mouseCapture: Widget | undefined;
        readonly Object: ObjectStatic;
        readonly opera: number | undefined;
        PER_MILL: string;
        PERCENT: string;
        procDelay: number;
        readonly processing: boolean;
        resendTimeout: number;
        readonly safari: boolean;
        spaceless: boolean;
        tipDelay: number;
        readonly unloading: boolean;
        readonly vender: string;
        readonly vender_: string;
        readonly version: string;
        readonly webkit: boolean;
        readonly Widget: WidgetStatic;

        (selector: string): JQZK;
        (element: Element): JQZK;
        (elementArray: Element[]): JQZK;
        (object: JQuery): JQZK;

        $(n: any, opts?: Partial<{exact: boolean; strict: boolean; child: boolean}>): zk.Widget | null;
        $default(opts: any, defaults: any): any;
        $extends<S extends Class, D, D2>(superclass: S, members: D & ThisType<D & (S extends zul.WidgetStatic ? zul.Widget : Widget)>, staticMembers?: D2): object;
        $import(name: string, fn?: any): any;
        $intercepts(targetClass: Class, interceptor: any): void;
        $package(name: string): any;
        $void: () => false;
        addDataHandler(name: string, script: string): void;
        afterAnimate(fn: () => void, delay: number): boolean;
        afterAuResponse(fn: () => void): void;
        afterLoad(func: () => void): boolean;
        afterLoad(pkgs: string, func: () => void): void;
        afterMount(fn: () => void, delay?: number): boolean;
        afterResize(fn: () => void): void;
        ajaxResourceURI(uri: string, version?: string, opts?: any): string;
        ajaxURI(uri: string, opts?: any): string;
        animating(): boolean;
        beforeUnload(fn: () => string | null, opts?: {remove: boolean}): void;
        copy(dst: object, src: object, backup?: object): object;
        cut(props: any, nm: string): object;
        debugLog(msg: string): void;
        define(klass: any, props: any): any;
        depends(a: string, b: string): void;
        disableESC(): void;
        enableESC(): void;
        endProcessing(): void;
        error(msg: string): void;
        errorDismiss(): void;
        get(o: any, name: string): any;
        getDataHandler(): any;
        getHost(pkg: string, js: boolean): string;
        getVersion(pkg: string): string;
        hasDataHandler(): boolean;
        isClass(cls: any): boolean;
        isLoaded(pkg: string, loading: boolean): boolean;
        isObject(o: any): boolean;
        load(pkg: string, dt: any, func: Function): boolean;
        load(pkg: string, func: Function): boolean;
        loadCSS(href: string, id: string, media: string): ZKCoreUtilityStatic;
        loadScript(src: string, name: string, charset: string, force: boolean): ZKCoreUtilityStatic;
        log(...detailed: any[]): void;
        override(oldfunc: Function, newfunc: Function): Function;
        override(dst: any, backup: any, src: any): any;
        override(dst: any, nm: string, val: any): any;
        parseFloat(v: string): number;
        parseInt(v: string, b?: number): number;
        resourceURI(uri: string, version?: string): string;
        set(dst: any, src: any, props: any[], ignoreUndefined: boolean): any;
        set(o: any, name: string, value: any, extra: any): any;
        setHost(host: string, updURI: string, pkgs: string[]): void;
        setScriptLoaded(name: string): void;
        setVersion(pkg: string, ver: string): void;
        stamp(): any;
        stamp(name: string, noAutoLog: boolean): void;
        startProcessing(timeout: number): void;
        stateless(dtid?: string, contextURI?: string, updateURI?: string, reqURI?: string): any;
    }

    interface Buffer extends Array<string> {
        new (): Buffer;
    }

    interface PositionOptions {
        overflow: boolean;
        dodgeRef: boolean;
    }

    interface RedoCSSOptions {
        fixFontIcon: boolean;
        selector: string;
    }

    interface SlideOptions {
        anchor: string;
        easing: string;
        duration: number;
        afterAnima: () => void;
    }

    interface Dimension {
        width: number;
        height: number;
        left: number;
        top: number;
    }

    interface JQZK {
        jq: JQuery;

        $(): Widget;
        absolutize(): JQZK;
        beforeHideOnUnbind(): void;
        borderHeight(): number;
        borderWidth(): number;
        cellIndex(): number;
        center(flags?: string): JQZK;
        cleanVisibility(): JQuery;
        clearStyles(): JQZK;
        cmOffset(): Offset;
        contentHeight(excludeMargin?: boolean): number;
        contentWidth(excludeMargin?: boolean): number;
        defaultAnimaOpts(wgt: any, opts: Partial<SlideOptions>, prop: string[], visible?: boolean): JQZK;
        detachChildren(): ChildNode[] | null;
        dimension(revised?: boolean): Dimension;
        disableSelection(): JQZK;
        enableSelection(): JQZK;
        focus(timeout?: number): boolean;
        getAnimationSpeed(defaultValue?: string | number): string | number;
        getSelectionRange(): [number, number];
        hasHScroll(): boolean;
        hasVParent(): boolean;
        hasVScroll(): boolean;
        isInput(): boolean;
        isOverlapped(el: HTMLElement, tolerant?: number): boolean;
        isRealScrollIntoView(): boolean;
        isRealVisible(strict?: boolean): boolean;
        isScrollIntoView(): boolean;
        isVisible(strict?: boolean): boolean;
        makeVParent(): JQZK;
        marginHeight(): number;
        marginWidth(): number;
        ncols(visibleOnly?: boolean): number;
        offsetHeight(): number;
        offsetHeightDoubleValue(): number;
        offsetLeft(): number;
        offsetLeftDoubleValue(): number;
        offsetTop(): number;
        offsetTopDoubleValue(): number;
        offsetWidth(): number;
        offsetWidthDoubleValue(): number;
        padBorderHeight(): number;
        padBorderWidth(): number;
        paddingHeight(): number;
        paddingWidth(): number;
        position(dim?: Dimension, where?: string, opts?: Partial<PositionOptions>): JQZK;
        position(el?: Element, where?: string, opts?: Partial<PositionOptions>): JQZK;
        redoCSS(timeout?: number, opts?: Partial<RedoCSSOptions>): JQZK;
        redoSrc(): JQZK;
        relativize(): JQZK;
        revisedHeight(size: number, excludeMargin?: boolean): number;
        revisedOffset(ofs?: Offset): Offset;
        revisedWidth(size: number, excludeMargin?: boolean): number;
        scrollIntoView(parent?: Element): JQZK;
        scrollOffset(): Offset;
        scrollTo(): JQZK;
        select(timeout?: number): boolean;
        setSelectionRange(start: number, end?: number): JQZK;
        /** @deprecated */ setStyles(styles: JQuery.PlainObject<string | number | ((this: HTMLElement, index: number, value: string) => string | number | void | undefined)>): JQZK;
        slideDown(wgt: Widget, opts?: Partial<SlideOptions>): JQZK;
        slideIn(wgt: Widget, opts?: Partial<SlideOptions>): JQZK;
        slideOut(wgt: Widget, opts?: Partial<SlideOptions>): JQZK;
        slideUp(wgt: Widget, opts?: Partial<SlideOptions>): JQZK;
        submit(): JQZK;
        sumStyles(areas: string, styles: {[cssProp: string]: string}): number;
        textSize(text?: string): [number, number];
        toStyleOffset(x: number, y: number): Offset;
        undoVParent(): JQZK;
        vflexHeight(): number;
        viewportOffset(): Offset;
        vparentNode(real?: boolean): HTMLElement;
    }
}

declare var zk: zk.ZKCoreUtilityStatic;
