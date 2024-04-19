import {render, screen} from '@testing-library/react'
import DashboardProductsPage from '@/app/(dashboardLayout)/dashboard/products/page'

it('should render the dashboard page' , () => {
  render(<DashboardProductsPage />);
  expect(screen.getAllByText('Productos')).toBeInTheDocument();
});