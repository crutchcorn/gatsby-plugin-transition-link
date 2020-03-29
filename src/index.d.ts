import * as React from 'react';
import {GatsbyLinkProps as GatsbyLinkPropsGeneric} from "gatsby";
import {NavigateOptions} from "@reach/router";
import {RefObject} from "react";

type GatsbyLinkProps = GatsbyLinkPropsGeneric<any>;

interface TransitionHandlerProps {
    injectPageProps?: boolean;
    children?: unknown;
}
declare const TransitionHandler: React.Component<TransitionHandlerProps>;

export type TransitionStatuses = 'entering' | 'entered' | 'exiting' | 'exited';

interface TransitionStateProps {
    children: ({mount, transitionStatus}: { mount: boolean, transitionStatus: TransitionStatuses }) => React.ReactNode;
}
declare const TransitionState: React.Component<TransitionStateProps>;

type TransitionPortalLevels = 'top' | 'bottom' | 'middle';

interface TransitionPortalProps {
    level?: TransitionPortalLevels
}
declare const TransitionPortal: React.Component<TransitionPortalProps>;

interface TransitionObserverProps {
    forceRender?: boolean;
    children: (contextState: unknown, innerRef: RefObject<unknown>) => React.ReactNode;
}

declare const TransitionObserver: React.Component<TransitionObserverProps>;

// Unknown
interface TriggerFnProps<State> {
    node: HTMLElement;
    e: Event;
    entry: EntryExit<State>;
    exit: EntryExit<State>;
}
type ExitEntryTriggerFn<State = object> = ({exit, node}: TriggerFnProps<State>) => void;

interface EntryExit<State = object> {
    state?: State;
    appearAfter?: number;
    length?: number;
    zIndex?: number;
    delay?: number;
    activeClass?: string;
    className?: string;
    trigger: ExitEntryTriggerFn<State>
}

interface UseTriggerTransitionOptions<State = any, LinkState = any> {
    event: Event;
    to: string;
    disableAnimation?: boolean;
    replace?: NavigateOptions<LinkState>['replace'];
    linkState?: NavigateOptions<LinkState>['state'];
    exit?: EntryExit<State>;
    entry?: EntryExit<State>;
    inTransition?: boolean;
    pages?: unknown;
    trigger?: ExitEntryTriggerFn<State>;
    updateContext?: unknown;
    preventScrollJump?: unknown;
}
type programmaticallyTriggerTransition<State, LinkState> = (calledOptions?: Event | UseTriggerTransitionOptions<State, LinkState>) => void;
declare const useTriggerTransition: <State, LinkState>(defaultOptions: UseTriggerTransitionOptions<State, LinkState>) => programmaticallyTriggerTransition<State, LinkState>;

interface TriggerPages<State> {
    entry: Promise<EntryExit<State>>
    exit:Promise<EntryExit<State>>;
}

interface TransitionLinkProps<State = any> extends Omit<GatsbyLinkProps, 'onClick' | 'innerRef' | 'replace'> {
    exit: EntryExit<State>,
    entry: EntryExit<State>,
    state?: State,
    replace?: unknown,
    preventScrollJump?: unknown,
    // Unknown
    trigger?: (pages: TriggerPages<State>) => void;
    exitLength?: number;
    entryDelay?: number;
    exitFn?: Function;
    entryState?: object;
    to: GatsbyLinkProps['to'];
    className?: GatsbyLinkProps['className'];
    activeStyle?: GatsbyLinkProps['activeStyle'];
    style?: GatsbyLinkProps['style'];
    activeClassName?: GatsbyLinkProps['activeClassName'];
    partiallyActive?: GatsbyLinkProps['partiallyActive'];
    onClick?: (event: Parameters<GatsbyLinkProps['onClick']>[0], weShouldNavigate: boolean) => void;
    innerRef?: GatsbyLinkProps['ref'],
    ref?: GatsbyLinkProps['ref']
}
declare const TransitionLink: React.Component<TransitionLinkProps>;

export {
    TransitionHandler,
    TransitionState,
    TransitionPortal,
    TransitionObserver,
    useTriggerTransition,
}

export default TransitionLink;
