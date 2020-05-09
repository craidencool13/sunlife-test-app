import { NgModule } from '@angular/core';
import { ExpandedHeaderComponent } from './expanded-header/expanded-header';
import { PolicyServicingComponent } from './policy-servicing/policy-servicing';
import { ManageFundsComponent } from './manage-funds/manage-funds';
@NgModule({
	declarations: [ExpandedHeaderComponent,
    PolicyServicingComponent,
    ManageFundsComponent],
	imports: [],
	exports: [ExpandedHeaderComponent,
    PolicyServicingComponent,
    ManageFundsComponent]
})
export class ComponentsModule {}
