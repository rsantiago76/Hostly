import { createBrowserRouter } from 'react-router';
import { ListingsPage } from './pages/listings';
import { PropertyDetailPage } from './pages/property-detail';
import { CheckoutPage } from './pages/checkout';
import { HostDashboardPage } from './pages/host-dashboard';
import { PropertyCalendarPage } from './pages/property-calendar';
import { HostMessagesPage } from './pages/host-messages';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, Component: ListingsPage },
      { path: 'listings', Component: ListingsPage },
      { path: 'property/:id', Component: PropertyDetailPage },
      { path: 'checkout', Component: CheckoutPage },
      { path: 'host/dashboard', Component: HostDashboardPage },
      { path: 'host/property/calendar', Component: PropertyCalendarPage },
      { path: 'host/messages', Component: HostMessagesPage },
    ],
  },
]);